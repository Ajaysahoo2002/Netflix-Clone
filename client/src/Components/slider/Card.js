import React, { useState } from 'react'
import "./card.css";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from 'react-icons/io5';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import { BsCheck } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import video from "../../Media/video.mp4";
export default React.memo(
    function Card({ movieData, isLiked = false }) {
        const [isHovered, setIsHovered] = useState(false);
        const navigate = useNavigate();
        const [email, setEmail] = useState(undefined);


        const addToList = async () => {
            const res = await fetch("/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    data: movieData
                })
            });
            const details = await res.json();
            console.log(details);
        }
        return (
            <div>
                <div className="card-container" onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => setIsHovered(false)}>
                    <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="Not Found!" />
                    {
                        isHovered &&
                        (
                            <div className="hover">
                                <div className="image-video-container">
                                    <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="Not Found!" onClick={() => { navigate("/player") }} />
                                    <video src={video} autoPlay loop muted onClick={() => { navigate("/player") }} />
                                </div>
                                <div className="info-container flex column">
                                    <h3 className="name" onClick={() => { navigate("/player") }}>{movieData.name}</h3>
                                    <div className="icons flex j-between">
                                        <div className="controls flex">
                                            <IoPlayCircleSharp title='play' onClick={() => navigate("/player")} />
                                            <RiThumbUpFill title='Like' />
                                            <RiThumbDownFill title='Dislike' />
                                            {
                                                isLiked ? (
                                                    <BsCheck title='Remove from List' />
                                                ) : (

                                                    <AiOutlinePlus title="Add to my list" onClick={addToList} />
                                                )
                                            }
                                        </div>
                                        <div className="info">
                                            <BiChevronDown title='More Info' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
);
