<?php

namespace App\Http\Controllers;

use App\Models\Diary;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Opis\JsonSchema\Validator;
use Opis\JsonSchema\Errors\ErrorFormatter;
use Illuminate\Support\Facades\Redirect;

class DiaryController extends Controller
{
    private string $schema = <<<JSON
{"title":"Form data","description":"A form submission","type":"object","properties":{"title":{"type":"string","title":"Title","minLength":1},"body":{"type":"string","title":"Title","minLength":1},"tags":{"type":"array","title":"Tags","items":{"type":"string","title":"Tags"},"minItems":0}},"required":["title","body"],"dependencies":{}}
JSON;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Diary/Index', ['diaries' => Diary::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Diary/Create', []);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $diary = Diary::create(
            $this->valid($request)
        );
        return Redirect::route("diaries.show", [$diary->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Diary  $diary
     * @return \Illuminate\Http\Response
     */
    public function show(Diary $diary)
    {
        return Inertia::render('Diary/Show', ['diary' => $diary]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Diary  $diary
     * @return \Illuminate\Http\Response
     */
    public function edit(Diary $diary)
    {
        return Inertia::render('Diary/Edit', ['diary' => $diary]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Diary  $diary
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Diary $diary)
    {
        $diary->update($this->valid($request));
        return Redirect::route("diaries.show", [$diary->id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Diary  $diary
     * @return \Illuminate\Http\Response
     */
    public function destroy(Diary $diary)
    {
    }

    protected function valid(Request $request)
    {
        $validator = new Validator();
        $result = $validator->validate((object)$request->all(), $this->schema);
        if (!$result->isValid()) {
            abort(422, (new ErrorFormatter())->format($result->error()));
        }
        return $request->all();
    }
}
