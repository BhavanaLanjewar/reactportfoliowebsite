import React from 'react';
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";

const Projects = () => {
  const ProjectList = [{
          id:1,
          name: "Google Keep Clone",
          imgUrl: project1
       },
      {
          id:2,
          name: "Temparature Converter",
          imgUrl: project2
      }];
  return(
          <motion.div className='projects' animate= {{
            scale: [1, 1],
            rotate:[90,0],
          }}
          transition = {{
            duration : 0.5,
            ease :"easeInOut",
          }}>
            <h2> Projects</h2>
            <div className='wrapper'>
              {
                ProjectList.map((item) => {
                  return (
                    <motion.div whileHover={{
                      scale:1.1 ,
                      transition: {duration:0.6}
                    }}>
                      <Card>
                        <Card.Img varient="top" src={item.imgUrl} />
                        <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                        </Card.Body>
                      </Card>
                  </motion.div>
                  );
                  })
                }
            </div>
          </motion.div>
        )
      }
export default Projects;