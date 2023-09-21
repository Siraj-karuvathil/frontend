import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/AdminNav";
import { useNavigate } from "react-router-dom";
import instance from "../../API/api_instance";
import { useDebouncedCallback } from 'use-debounce'
import * as Yup from 'yup'
import { useFormik } from 'formik';
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
  image: Yup.mixed().required('Course Image is required'),
})

function CourseDetails(props) {
 


  const handleClick = (id) => {
    navigate(`/admin/class/${id}`);
  };
  const handleClick2 = (id) => {
    navigate(`/admin/course-edit/${id}`);
  };



  const [course, setCourse] = useState([]);
  const navigate = useNavigate('');
  const fetchItems = async () => {
    await instance.get("/course", {}).then((response) => {
      setCourse(response.data.data.courses);
      console.log(response.data);
    });
  };
  useEffect(() => {
    fetchItems();
  }, []);

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
    // formdata.append('videoLink', values.videoLink)
    values.image instanceof File && formdata.append('image', values.image)
    console.log('1')
    try {
      console.log(formdata)
      const res = await instance.post('/course', formdata, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      console.log(res.status)
      if (res.status === 400 || !res) {
        window.alert('Message not sent, try agin..')
      } else {
        fetchItems();
        setSubmitting(false)
        toast.dark('Course Added Successfully',{
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
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
      // videoLink: '',
    },
    validationSchema: CreateCourseSchema,
    onSubmit: debouncedSubmit,
  })

const HandleDelete = async (id)=>{
  confirmAlert({
    title: 'Confirm to submit',
    message: 'Are you sure to do this.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => Responce()
        
        
      },
      {
        label: 'No',
      }
    ]
  });

  const Responce = async()=> {
  const res = await instance.delete(`/course/${id}`).then((result)=>{
    fetchItems()
    toast.dark('Course Deleted Successfully',{
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    if(
      result.statusCode === 200
    ){
      console.log("sk");
    }
  })
  console.log(res);
 }
  
 
}

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
                required
              />
            </div>

            {/* <div>
              <p className="text-xl pb-4">Banner Video</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="Video link"
                name="videoLink"
                value={values.videoLink}
                onChange={handleChange}
                required
              />
            </div> */}

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

        {/* Display Data*/}
        {course && course.length>0 && course?.slice(0).reverse().map((item, index) => {
          return (
            <div className="w-full bg-[#2b2929] p-5 min-h-[200px]" key={index}>
              <div className="relative grid grid-cols-1  md:grid-cols-5">
                {/* contents */}

                <div className="flex flex-col py-5 gap-5 md:col-span-3">
                  <p className="text-2xl font-medium">{item.name}</p>
                  <p>{item.about.slice(0,180)} ...</p>
                  <p>Instructor(s): {item.instructorName}</p>
                  <p>Class Length: {item.duration} video</p>
                  <p>{item.unit} units | {item.lesson} lessons | {item.task} tasks</p>
                </div>

                <div className="md:grid place-items-center">
                  <h1 className="text-primary-clr2 text-3xl font-semibold">
                    ${item.price}
                  </h1>
                </div>
                {/* Edit/Delete Buttons */}
                <div className="absolute top-10 right-10 flex gap-8">
                  {/* Edit btn */}
                  <i onClick={() => handleClick2(item._id)} class="fa-solid fa-pen-to-square hover:text-red-700 cursor-pointer"></i>
                  {/* Delete btn */}
                  <i onClick={()=>HandleDelete(item._id)}  class="fa-solid fa-trash hover:text-red-700 cursor-pointer"></i>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <button onClick={() => handleClick(item._id)} className="bg-primary-clr2 hover:bg-primary-clr1 rounded-md text-xl px-4 py-1 cursor-pointer">Add class</button>
                 

                </div>
              </div>

              <hr />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default CourseDetails;
