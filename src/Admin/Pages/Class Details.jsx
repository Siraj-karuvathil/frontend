import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/AdminNav';
import instance from "../../API/api_instance";


let Image = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670322162/Cooking%20Academy%20Assets/foods/Indian_food_yyqojn.jpg';

function ClassDetails() {


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


  function displayClassDetails(index){
    return(
          <div className='p-2 grid grid-cols-1 md:grid-cols-4 gap-5  bg-bg-darks rounded-lg place-items-center'>
              <img className='h-72 w-52 object-cover rounded-md' src={index.image} alt="img" />
              <div className='flex flex-col gap-4 md:col-span-2'>
                <p className='font-medium text-xl'>{index.name}</p>
                <p>{index.about.slice(0,200)} ...........</p>
                <p>Class Length: {index.duration} video</p>
                <p>{index.unit} units | {index.lesson} lessons | {index.task} tasks</p>
              </div>
              <div>
                {/* <a onClick={() => navigate(`/admin/class`, { state: { details: index } })}><i class="text-5xl text-primary-clr2 hover:text-primary-clr1 bg-[#424040] hover:bg-[#555151] p-2 rounded-md fa-solid fa-arrow-right-from-bracket"></i></a> */}
                {/* <a onClick={() => navigate(`/admin/class-details-Inner/${index.name}`, { state: { details: index } })}><i class="text-5xl text-primary-clr2 hover:text-primary-clr1 bg-[#424040] hover:bg-[#555151] p-2 rounded-md fa-solid fa-arrow-right-from-bracket"></i></a> */}
              </div>
          </div>
    )
  }

  return (
    <>
    <Navbar/>
    
     {/* Main section */}
     <section className='admin-body'>
      {/* Data Input */}
        <h1 className='font-bold text-4xl p-5'>Class Details</h1>

        <div className='p-5 flex flex-col gap-5'>
          {course && course.length>0 && course?.slice(0).reverse().map(displayClassDetails)}
        </div>
    </section>

    </>
  )
}

export default ClassDetails