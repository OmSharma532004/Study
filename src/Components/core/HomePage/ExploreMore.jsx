import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighLigthText";
import CourseCard from "./CourseCard";

const tab=[
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const ExploreMore= ()=>{
    const [currentTab,setCurrentTab]= useState(tab[0]);
    const [course,setCourse]= useState(HomePageExplore[0].courses);
    const [currentCard,setCurrentCard]=useState(HomePageExplore[0].courses[0].heading);

    const setMyCards= (value)=> {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course)=>course.tag==value);
        setCourse(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);

    }
    return(
        <div>
           <div className="text-4xl font-semibold text-center ">
                Unlock the <HighlightText text={"Power of code"}></HighlightText>
            </div>

            <p className="text-center text-richblack-300 text-sm text-[16px] mt-3 ">
                Learn to build anything you can imagine
            </p>

            <div className="flex flex-row rounded-full bg-richblack-800 mb-5 mt-[20px] border-richblack-200 ">
                {
                    tab.map( (element,index) =>{
                        return(
                            <div className={`text-[16px] flex flex-row items-center gap-3
                            ${currentTab==element ? "bg-richblack-900 text-richblack-5 font-medium"
                            :" text-richblack-200"} rounded-full transition-all duration-200
                            hover:bg-richblack-900 hover:text-richblack-5 px-5 py-2`}
                            key={index} 
                            onClick={()=>{
                                setMyCards(element);
                            }}>
                            
                                
                                {element}

                            </div>
                                
                        )
                    } )
                }
            </div>

            <div className="lg:h-[150px]">
                <div className="flex gap-9 w-full justify-center mt-5 flex-wrap lg:absolute right-0 left-0 mr-auto ml-auto">

                {
                    course.map((element,index)=>{
                    return(
                        <CourseCard
                        key={index}
                        cardData={element}
                        currentCard={currentCard}
                        setCurrentCard={setCurrentCard}
                        />
                    )
                    })
                }
                </div>

               

            </div>


        </div>

    )
}
export default ExploreMore;