
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Navbar from '../components/Navbar'; // Assuming Navbar component exists
import Footer from '../components/Footer'; // Assuming Footer component exists

const ValidationPage = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string().required('Postal code is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    paymentMethod: Yup.string().required('Payment method is required'),
  });

  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
        <h1 className="text-3xl text-white font-extrabold text-center bg-orange-400 w-[100%] p-2 mb-4">Validation</h1>
      <div className="container mx-auto px-4 py-16">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            postalCode: '',
            phoneNumber: '',
            paymentMethod: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Handle form submission here (e.g., send data to server)
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ handleSubmit, isSubmitting, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <Field
                  name="firstName"
                  type="text"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-transparent border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 bg-transparent placeholder-orange-400 text-gray-700"
                  placeholder="Enter your first name"
                />
                {touched.firstName && errors.firstName && (
                  <p className="text-red-500 text-xs italic">{errors.firstName}</p>
                )}
              </div>

              <div className="form-group mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <Field
                  name="lastName"
                  type="text"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-transparent border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 bg-transparent placeholder-orange-400 text-gray-700"
                  placeholder="Enter your last name"
                />
                {touched.lastName && errors.lastName && (
                  <p className="text-red-500 text-xs italic">{errors.lastName}</p>
                )}
              </div>

              <div className="form-group mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-transparent border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 bg-transparent placeholder-orange-400 text-gray-700"
                  placeholder="Enter your email"
                />
                {touched.email && errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                )}
              </div>

              <div className="form-group mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <Field
                  name="address"
                  type="text"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-transparent border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 bg-transparent placeholder-orange-400 text-gray-700"
                  placeholder="Enter your address"
                />
                {touched.address && errors.address && (
                  <p className="text-red-500 text-xs italic">{errors.address}</p>
                )}
              </div>

              <div className="form-group mb-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <Field
                  name="city"
                  type ="text"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-transparent border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 bg-transparent placeholder-orange-400 text-gray-700"
                  placeholder="Enter your city"
                />
                {touched.city && errors.city && (
                  <p className="text-red-500 text-xs italic">{errors.city}</p>
                )}
              </div>

              <div className="form-group mb-4">
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                  Postal Code
                </label>
                <Field
                  name="postalCode"
                  type="text"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-transparent border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 bg-transparent placeholder-orange-400 text-gray-700"
                  placeholder="Enter your postal code"
                />
                {touched.postalCode && errors.postalCode && (
                  <p className="text-red-500 text-xs italic">{errors.postalCode}</p>
                )}
              </div>

              <div className="form-group mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Field
                  name="phoneNumber"
                  type="text"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-transparent border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 bg-transparent placeholder-orange-400 text-gray-700"
                  placeholder="Enter your phone number"
                />
                {touched.phoneNumber && errors.phoneNumber && (
                  <p className="text-red-500 text-xs italic">{errors.phoneNumber}</p>
                )}
              </div>

              <div className="form-group mb-4">
                <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                  Payment Method
                </label>
                <Field
                  name="paymentMethod"
                  as="select"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-transparent border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 bg-transparent placeholder-orange-400 text-gray-700"
                >
                  <option value="">Select Payment Method</option>
                  <option value="creditCard">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  {/* ... other payment options */}
                </Field>
                {touched.paymentMethod && errors.paymentMethod && (
                  <p className="text-red-500 text-xs italic">{errors.paymentMethod}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
};

export default ValidationPage;