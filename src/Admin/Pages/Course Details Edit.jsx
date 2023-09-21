import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/AdminNav";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import instance from "../../API/api_instance";
import { useDebouncedCallback } from 'use-debounce'
import * as Yup from 'yup'
import { setNestedObjectValues, useFormik } from 'formik';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ClassPage from '../Pages/Class Detail Inner';

const CreateCourseSchema = Yup.object().shape({
  name: Yup.string().required('Course Name is required'),
  duration: Yup.string().required('Course Duration is required'),
  instructorName: Yup.string().required('Course intrector name is required'),
  unit: Yup.string().required('Course unnit is required'),
  lesson: Yup.string().required('lesson is required'),
  task: Yup.string().required('task is required'),
  // image: Yup.mixed().required('Course Image is required'),
})

function CourseEditDetails(props) {
 
  let { id } = useParams();
  // console.log(id);


  const navigate = useNavigate('');

  const [course, setCourse] = useState({
    name: "",
    about: "",
    instructorName: "",
    duration: "",
    unit: "",
    lesson: "",
    task: "",
    price: "",
  });


  // SUBMIT FUNCTION SATRT

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    let formdata = new FormData()
    formdata.append('name', values.name)
    formdata.append('duration', values.duration)
    formdata.append('instructorName', values.instructorName)
    formdata.append('unit', values.unit)
    formdata.append('lesson', values.lesson)
    formdata.append('task', values.task)
    formdata.append('about', values.about)
    formdata.append('price', values.price)
    values.image instanceof File && formdata.append('image', values.image)
    console.log('1')
    try {
      // console.log(formdata)
      const res = await instance.put(`/course/${id}`, formdata, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      // console.log(res.status)
      console.log(res);
      if (res.status === 400) {
       
        window.alert('Message not sent, try agin..')
      } else {
        
        setSubmitting(false)
        toast.dark('Course Edited Successfully',{
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        navigate('/admin/course-details')
        resetForm()
      }
    } catch (error) {
      console.log('errr')
      console.log(error)
    }
  }


    // SUBMIT FUNCTION END
  
    const debouncedSubmit = useDebouncedCallback(onSubmit, 300)
    const {
      values,
      setValues,
      handleSubmit,
      isSubmitting,
      handleChange,
      setFieldValue,
      setFieldTouched,
    } = useFormik({
      initialValues: {
        name: '',
        image: '',
        duration: '',
        instructorName: '',
        unit: '',
        lesson: '',
        task: '',
        about: '',
        price: '',
      },
      validationSchema: CreateCourseSchema,
      onSubmit: debouncedSubmit,
    })
  

  // console.log(course);
  useEffect(() => {
    instance
      .get(`/course/${id}`)
      .then((res) =>
      setValues({
        name: res.data.data.name,
        duration: res.data.data.duration,
        instructorName: res.data.data.instructorName,
        unit: res.data.data.unit,
        lesson: res.data.data.lesson,
        task: res.data.data.task,
        about: res.data.data.about,
        price: res.data.data.price,

      })
      )
      // .then((data) => setCourse(data))
      .catch((error) => console.log(error));
  }, []);





  return (
    <>
      <Navbar />

      {/* Main section */}
      <section className="admin-body">
        {/* Data Input */}
        <div className="p-5">
          <h1 className="font-bold text-4xl pt-5">Course Details</h1>

          <form
            onSubmit={handleSubmit}
            method="POST"
            className="lg:w-3/5 flex flex-col gap-6 py-10"
          >
            <div>
              <p className="text-xl pb-4">Banner Image</p>
              <input
                type="file"
                class="block w-full text-sm text-slate-500 bg-bg-darks md:w-80 p-10 border-dashed border-slate-600 border-2 rounded-lg
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-transparent file:text-primary-clr2
                      hover:file:bg-violet-100
                    "
                name="image"
                onChange={(e) => {
                  setFieldTouched("image", true);
                  if (
                    e?.target?.files &&
                    e?.target?.files?.length > 0
                  ) {
                    setFieldValue("image", e.target.files[0]);
                  }
                }}
     
              />
            </div>

           

            <div>
              <p className="text-xl pb-4">Headline</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="Enter your Headline"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <p className="text-xl pb-4">About Class</p>
              <textarea
                rows="3"
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="About Class"
                name="about"
                value={values.about}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <p className="text-xl pb-4">Instructure Name</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="Instructure name"
                name="instructorName"
                value={values.instructorName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <p className="text-xl pb-4">Class Length</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="Class Length"
                name="duration"
                value={values.duration}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-row justify-between gap-10">
              <div>
                <p className="text-xl pb-4">Units</p>
                <input
                  className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                  type="text"
                  placeholder="01"
                  name="unit"
                  value={values.unit}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <p className="text-xl pb-4">Lessons</p>
                <input
                  className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                  type="text"
                  placeholder="19"
                  name="lesson"
                  value={values.lesson}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <p className="text-xl pb-4">Tasks</p>
                <input
                  className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                  type="text"
                  placeholder="60"
                  name="task"
                  value={values.task}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <p className="text-xl pb-4">Enrolling Fees</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-1/3"
                type="text"
                placeholder="300"
                name="price"
                value={values.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex justify-end">
              <button
               disabled={isSubmitting}
                className="bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-200 md:px-16 py-2 rounded-md"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}>
            
                Create
              </button>
            </div>
          </form>
        </div>
        {/* Data Input end*/}

      </section>
    </>
  );
}

export default CourseEditDetails;

