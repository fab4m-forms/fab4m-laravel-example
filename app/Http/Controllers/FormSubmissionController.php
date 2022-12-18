<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Models\FormSubmission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Opis\JsonSchema\Validator;
use Opis\JsonSchema\Errors\ErrorFormatter;

class FormSubmissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create(Request $request, Form $form)
    {
    }

    public function store(Request $request, Form $form, FormSubmission $formSubmission)
    {
        $validator = new Validator();
        $result = $validator->validate((object)$request->get('submission'), $form->schema);
        if (!$result->isValid()) {
            abort(422, (new ErrorFormatter())->format($result->error()));
        }
        $submission = FormSubmission::create([
            'form_id' => $form->id,
            'submission' => $request->get('submission'),
        ]);
        return Redirect::route('forms.submissions.show', [$form->id, $submission->id]);
    }

    public function show(Form $form, FormSubmission $submission)
    {
        return Inertia::render("FormSubmission/Show", ['submission' => $submission]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FormSubmission  $formSubmission
     * @return \Illuminate\Http\Response
     */
    public function edit(FormSubmission $formSubmission)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FormSubmission  $formSubmission
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FormSubmission $formSubmission)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FormSubmission  $formSubmission
     * @return \Illuminate\Http\Response
     */
    public function destroy(FormSubmission $formSubmission)
    {
        //
    }
}
