
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams,useLocation } from "react-router";
import instance from "../../API/api_instance";
import Navbar from "../Navbar/AdminNav";
import { useDebouncedCallback } from "use-debounce";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const CreateCourseSchema = Yup.object().shape({
  chapterTitle: Yup.string().required("chapterTitle Name is required"),
  classInfo: Yup.string().required("classInfo is required"),
  instrecterName: Yup.string().required("Course intrector name is required"),


});

function ClassDetailEdit() {
  let { id,courseId } = useParams();

  const location = useLocation()
  console.log(courseId);
  console.log(id,"clas id");

  const navigate = useNavigate("");
  const [inputList, setinputList] = useState([{ title: "", videoLink: "" }]);
  // console.log(inputList);

  // =======API CALL===========//
  const [classes, setClasses] = useState([]);


   // ===========API POST========//

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const { chapterTitle, classInfo, instrecterName } = values;
    const data = {
      chapterTitle,
      classInfo,
      instrecterName,
      lessons:inputList,
      courseId
    };
    console.log(data);

    try {
      // console.log(formdata)
      const res = await instance.put(`/course/class/${id}`,data ,{
        headers: {
          "Content-Type": "application/json",
        },
        // body: data
       
      });
      console.log(res.status);
      if (res.status === 400 || !res) {
        window.alert("Message not sent, try again..");
      } else {
       
        setSubmitting(false);
        toast.dark('Class Updated Successfully',{
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        resetForm();
        setinputList([{ title: "", videoLink: "" }])
        navigate(`/admin/class/${courseId}`)
      }
    } catch (error) {
      console.log("errr");
      console.log(error);
    }
  };

  
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
        chapterTitle: '',
        classInfo: '',
        instrecterName: '',

      },
      validationSchema: CreateCourseSchema,
      onSubmit: debouncedSubmit,
    })


  useEffect(() => {
    
       instance.get(`/course/class/${id}`, {}).then((response) => {
        
        setValues({
          
          chapterTitle: response.data.data.chapterTitle,
          classInfo: response.data.data.classInfo,
          instrecterName: response.data.data.instrecterName,
        

  
        })
        setinputList(response.data.data.lessons)
      });
    
  }, []);
  // =======API CALL===========//

 


  // ===========API POST========//

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([...inputList, { title: "", videoLink: "" }]);
  };

  

  return (
    <>
      <Navbar />

      {/* Main section */}

      <section className="admin-body">
        {/* Data Input */}
        <div className="p-5">
          <h1 className="font-bold text-4xl pt-5">Edit class</h1>

          <form
            onSubmit={handleSubmit}
            method="POST"
            className="md:w-4/5 lg:w-3/5 flex flex-col gap-8 py-10"
          >
            <div className="">
              <div className="">
                <p className="text-xl pb-4">Chapter Title</p>
                <input
                  className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                  type="text"
                  placeholder="Title"
                  name="chapterTitle"
                  value={values.chapterTitle}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <p className="text-xl pb-4">Class info</p>
              <textarea
                rows="3"
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="Class info"
                name="classInfo"
                value={values.classInfo}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <p className="text-xl pb-4">Instructor Name</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="Instructor name"
                name="instrecterName"
                value={values.instrecterName}
                onChange={handleChange}
                required
              />
            </div>

            {inputList.map((x, i) => {
              return (
                <div className="md:pl-10 flex flex-col gap-5 relative">
                  <div className="">
                    <div className="">
                      <p className="text-xl pb-4">Lesson Title</p>
                      <input
                        className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={x.title}
                        onChange={(e) => handleinputchange(e, i)}
                      />
                    </div>
                  </div>
                  <div className="">
                    <p className="text-xl pb-4">Video Link</p>
                    <input
                      className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                      type="text"
                      placeholder="Video link"
                      name="videoLink"
                      value={x.videoLink}
                      onChange={(e) => handleinputchange(e, i)}
                    />
                  </div>
                  <div className="flex justify-between">
                    {inputList.length - 1 === i && (
                      <a
                        onClick={handleaddclick}
                        className="text-primary-clr2 cursor-pointer"
                      >
                        + Add Lesson
                      </a>
                    )}
                    {inputList.length !== 1 && (
                      <i
                        onClick={() => handleremove(i)}
                        class="text-xl absolute right-0 fa-solid fa-trash hover:text-red-700 cursor-pointer"
                      ></i>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="flex justify-end">
              <button
                disabled={isSubmitting}
                className="bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-200 md:px-16 py-2 rounded-md"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
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

export default ClassDetailEdit;
