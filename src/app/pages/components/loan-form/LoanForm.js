import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { zipObject } from 'lodash';

const LoanForm = (props) => {
    const dynFields = zipObject((props.fields.map(f => f.name)),(props.fields.map(f => f.value || '')))
    console.log("dynFields", dynFields);
    return (<>
        <Formik
            initialValues={{
                name: '',
                dateOfBirth: '',
                gender: '',
                address: '',
                panNumber: '',
                panNumberDocument: '',
                aadhaarNumber: '',
                aadhaarNumberDocument: '',
                annualIncome: '',
                loanProduct: '',
                loanSubProduct: '',
                loanAmount: '',
                loanTenure: '',
                ...dynFields
            }}
            enableReinitialize={true}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                    .required('Name is required'),
                dateOfBirth: Yup.string()
                    .required('Date of Birth is required'),
                gender: Yup.string()
                    .required('Gender is required'),
                address: Yup.string()
                    .required('Address is required'),
                panNumber: Yup.string()
                    .required('Pan Number is required'),
                panNumberDocument: Yup.string()
                    .required('Pan Number Document is required'),
                aadhaarNumber: Yup.string()
                    .required('Pan Number is required'),
                aadhaarNumberDocument: Yup.string()
                    .required('Pan Number Document is required'),
                annualIncome: Yup.string()
                    .required('Annual Income is required'),
                loanProduct: Yup.string()
                    .required('Loan Product is required'),
                loanSubProduct: Yup.string()
                    .required('Loan Sub Product Document is required'),
                loanAmount: Yup.string()
                    .required('Loan Amount is required'),
                loanTenure: Yup.string()
                    .required('Loan Tenure is required'),
            })}
            onSubmit={fields => {
                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            }}
            render={({errors, status, touched, setFieldValue}) => (
                <Form>
                    <div className="row">
                        <div className="form-group col-md-6 col-lg-6 col-sm-12">
                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text"
                                   className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')}/>
                            <ErrorMessage name="name" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-sm-12">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <Field name="dateOfBirth" type="text"
                                   className={'form-control' + (errors.dateOfBirth && touched.dateOfBirth ? ' is-invalid' : '')}/>
                            <ErrorMessage name="dateOfBirth" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-sm-12">
                            <label htmlFor="gender">Gender</label>
                            {/* <Field name="gender" type="text"
                             className={'form-control' + (errors.gender && touched.gender ? ' is-invalid' : '')} /> */}
                            <Field
                                className={'form-control' + (errors.gender && touched.gender ? ' is-invalid' : '')}
                                name="gender" component="select" placeholder="Your Gender">
                                <option defaultValue>Your Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="Other">Other</option>
                            </Field>
                            <ErrorMessage name="gender" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-sm-12">
                            <label htmlFor="address">Address</label>
                            <Field name="address" type="text"
                                   className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')}/>
                            <ErrorMessage name="address" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-sm-12">
                            <label htmlFor="panNumber">PAN Number</label>
                            <Field name="panNumber" type="text"
                                   className={'form-control' + (errors.panNumber && touched.panNumber ? ' is-invalid' : '')}/>
                            <ErrorMessage name="panNumber" component="div" className="invalid-feedback"/>
                        </div>

                        <div className="form-group col-md-6 col-lg-6 col-sm-12">
                            <label htmlFor="panNumberDocument">PAN Number Document</label>
                            <input name="panNumberDocument" type="file"
                                   className={'form-control' + (errors.panNumberDocument && touched.panNumberDocument ? ' is-invalid' : '')}
                                   onChange={(event) => {
                                       setFieldValue("panNumberDocument", event.currentTarget.files[0]);
                                   }}/>
                        </div>

                        <div className="form-group col-md-6 col-lg-6 col-sm-12">
                            <label htmlFor="aadhaarNumber">Aadhaar Number</label>
                            <Field name="aadhaarNumber" type="text"
                                   className={'form-control' + (errors.aadhaarNumber && touched.aadhaarNumber ? ' is-invalid' : '')}/>
                            <ErrorMessage name="aadhaarNumber" component="div" className="invalid-feedback"/>
                        </div>

                        <div className="form-group col-md-6 col-lg-6 col-sm-12">
                            <label htmlFor="aadhaarNumberDocument">Aadhaar Number Document</label>
                            <input name="aadhaarNumberDocument" type="file"
                                   className={'form-control' + (errors.aadhaarNumberDocument && touched.aadhaarNumberDocument ? ' is-invalid' : '')}
                                   onChange={(event) => {
                                       setFieldValue("aadhaarNumberDocument", event.currentTarget.files[0]);
                                   }}/>
                        </div>

                        <div className="form-group col-md-6 col-lg-6 col-sm-12">
                            <label htmlFor="annualIncome">Annual Income</label>
                            <Field name="annualIncome" type="text"
                                   className={'form-control' + (errors.annualIncome && touched.annualIncome ? ' is-invalid' : '')}/>
                            <ErrorMessage name="annualIncome" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-sm-12">
                            <label htmlFor="loanProduct">Loan Product</label>
                            <Field name="loanProduct" type="text"
                                   className={'form-control' + (errors.loanProduct && touched.loanProduct ? ' is-invalid' : '')}/>
                            <ErrorMessage name="loanProduct" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-sm-12">
                            <label htmlFor="loanSubProduct">Loan Sub Product</label>
                            <Field name="loanSubProduct" type="text"
                                   className={'form-control' + (errors.loanSubProduct && touched.loanSubProduct ? ' is-invalid' : '')}/>
                            <ErrorMessage name="loanSubProduct" component="div" className="invalid-feedback"/>
                        </div>

                        <div className="form-group col-md-6 col-lg-6 col-sm-12">
                            <label htmlFor="loanAmount">Loan Amount</label>
                            <Field name="loanAmount" type="text"
                                   className={'form-control' + (errors.loanAmount && touched.loanAmount ? ' is-invalid' : '')}/>
                            <ErrorMessage name="loanAmount" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-sm-12">
                            <label htmlFor="loanTenure">Loan Tenure</label>
                            <Field name="loanTenure" type="text"
                                   className={'form-control' + (errors.loanTenure && touched.loanTenure ? ' is-invalid' : '')}/>
                            <ErrorMessage name="loanTenure" component="div" className="invalid-feedback"/>
                        </div>
                        {
                            props.fields.map(((form, i) =>
                                    <div className="form-group col-md-6 col-lg-6 col-sm-12" key={i}>
                                        <label htmlFor={form.name}>{form.placeholder}</label>
                                        <Field name={form.name} type={form.intput_type}
                                               className={'form-control' + (errors[form.name] && touched[form.name] ? ' is-invalid' : '')}/>
                                        <ErrorMessage name={form.name} component="div" className="invalid-feedback"/>
                                    </div>
                            ))
                        }

                    </div>
                    <div className="text-center m-auto">
                        <button type="submit" className="btn btn-primary mr-2">Submit</button>
                        <button type="reset" className="btn btn-secondary">Reset</button>
                    </div>
                </Form>
            )}
        />
    </>)
}

export default LoanForm;