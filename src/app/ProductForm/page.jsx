'use client';
import React, { useRef } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";


const productSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short")
    .max(25, "Too Long")
    .required("Please enter title"),

  brand: Yup.string()
  .min(2, "Too short")
  .max(25, "Too Long")
  .required("Please enter brand name"),

  category: Yup.string()
  .min(2, "Too short")
  .max(25, "Too Long")
  .required("Please enter category"),

  price: Yup.number().required(),




});

const initialValues= {
  title: "",
  brand:"",
  category:"",
  model:"",
  price:"",
  image:"",
};

const ProductForm = () => {
  const router = useRouter();
  const fileRef = useRef("");
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, {resetForm, setSubmitting})=>{
      console.log(values);

      axios.post("http://localhost:5000/product/add", values)
      .then((response) => {
        console.log(response.status);
        resetForm();
        fileRef.current.value="";
       
        toast.success("Registered successfully");
          router.push("/allproduct");
      }).catch((err) => {
        console.log(err);
      });
      setSubmitting(false);
    },
    validationSchema: productSchema,
  })



  return (
    <div>
      <>
        {/* Card Section */}
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                Product description
              </h2>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Manage product name, category and price settings.
              </p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              {/* Grid */}
              <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                <div className="sm:col-span-3">
                  <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                    Profile photo
                  </label >
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <div className="flex items-center gap-5">
                    <img
                      className="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900"
                      src="https://preline.co/assets/img/160x160/img1.jpg"
                      alt="Avatar"
                    />
                    <div className="flex gap-x-2">
                      <div>
                        <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                         htmlFor="image">
                     
                       <input 
                        id="image"
                        type="file"
                        ref={fileRef}
                        onBlur={formik.handleBlur}
                        onChange={(event) => {
                          formik.setFieldValue(
                            "image",
                            URL.createObjectURL(event.currentTarget.files[0])
                            
                          );
                        }}
                      />

                       </label>
                      </div>
                      {formik.errors.image && formik.touched.image ? (
                  <p className="text-xs text-red-600 mt-2">
                    {formik.errors.image}
                  </p>
                ) : null}

                    </div>
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Title
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <div className="sm:flex">
                    <input
                      id="title"
                      type="text"
                      name="title"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.title}
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder=" Men polo T-shirt"
                    />
                    
                  </div>
                  {formik.errors.title && formik.touched.title ? (
                    <p className="text-xs text-red-600 mt-2">
                      {formik.errors.title}
                    </p>
                  ) : null}

                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="brand"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Brand
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <div className="sm:flex">
                    <input
                      id="brand"
                      type="text"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.brand}
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Adidas"
                    />
                  </div>
                  {formik.errors.brand && formik.touched.brand ? (
                    <p className="text-xs text-red-600 mt-2">
                      {formik.errors.brand}
                    </p>
                  ) : null}

                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-account-full-name"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Category
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <div className="sm:flex">
                    <input
                      id="category"
                      type="text"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.category}
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Clothing"
                    />
                  </div>
                  {formik.errors.category && formik.touched.category ? (
                    <p className="text-xs text-red-600 mt-2">
                      {formik.errors.category}
                    </p>
                  ) : null}

                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="price"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Price(₹)
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <div className="sm:flex">
                    <input
                      id="price"
                      type="number"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.price}
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="₹4000"
                    />
                  </div>
                  {formik.errors.price && formik.touched.price ? (
                    <p className="text-xs text-red-600 mt-2">
                      {formik.errors.price}
                    </p>
                  ) : null}

                </div>
              </div>
              {/* End Grid */}
              <div className="mt-5 flex justify-end gap-x-2">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                >
                  Cancel
                </button>
                <button
                disabled={formik.isSubmitting}
                  type="submit"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
        {/* End Card Section */}
      </>
    </div>
  );
};

export default ProductForm;