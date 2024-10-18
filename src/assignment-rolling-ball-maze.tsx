
export interface AssignmentProps {
    dueDate: string;
}

export function AssignmentRollingBallMaze( props: AssignmentProps) {
  return (
    <>
        <main className="main">
            <h1 id="title">Assignment - Rolling Ball Maze</h1>
            <h2> Due Date: <span id="due-date">{props.dueDate}</span></h2>
            
            <h1>Updates</h1>

                <ol> 
                    <li>Page opened</li>
                </ol>

            <h1>Introduction</h1>

            <p>
                The goal of this assignment is to demonstrate your ability to control the position and 
                orientation of the hip of your leg or humanoid robot.
            </p>
            <p> 
                You will demonstrate the control using a rolling ball/marble game.
            </p>

            <h1>Construction</h1>

            <p> 
                Construct a simple leg with at least two degrees of freedom (DOF). The leg must be able to move in two directions (pan and tilt).
            </p>

            <p> 
                You can build the leg out of cardboard, plastic, or 3D print your own design.
            </p>

            <p> 
                Use a Raspberry Pi Pico 2 as the controller for your robot. A simple introduction using MicroPython is available <a href="https://how2electronics.com/how-to-control-servo-motor-with-raspberry-pi-pico/">https://how2electronics.com/how-to-control-servo-motor-with-raspberry-pi-pico/</a>.
            </p>

            <h1>Open-Loop Control of the Two Dimensional Marble Game</h1>
          
            <p> 
                In this challenge, we will first demonstrate the ability to control the movement of the hip of your robot.
            </p>

            <p> 
                After constructing your leg assembly, add a two dimensional maze at the hip of your robot. The size of the maze should be 11cm by 15cm. The goal is to roll a golf or table tennis ball from the Start position to the Goal position.
            </p>

            <p> 
                The walls of your maze should be about 1cm tall. For a greater challenge, you can lower the height of the walls, especially the external walls. Then you have to carefully control the speed of the ball, since it will otherwise jump out of the maze.
            </p>

            <div className=""> 
                <img src="/assets/maze1.svg" style={{width:"50%"}}></img>
            </div>
            
            <p> A possible leg design is shown in the image below.</p>
            <div style={{width:"100%"}}> 
                <table> 
                    <tbody> 
                        <tr> 
                            <td> <img src="/assets/leg_assembly.svg" style={{width:"50%"}}></img> </td>
                            <td> <img src="/assets/leg_assembly_side.svg" style={{width:"50%"}}></img> </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h1> Servo Control </h1>

            <p> 
                First implement a program to demonstrate control of the leg and hip of your humanoid robot.
            </p>

            <p> 
                Identify the maximum angles and home positions of your servos.
            </p>

            <p> 
                If you built your own robot leg, make sure that you keep your leg assembly light, so that you can move the hip given the RC servos.
            </p>

            <h1> Remote Control</h1>

            <p> 
                Implement an application to control the angles of the joints.
            </p> 

            <p> 
                Your application should be able to:
                <ol> 
                    <li>
                        change the angles of each of at least four servos,
                    </li>
                    <li>
                        control the position and orientation of the hip of your leg.
                    </li>
                    <li> 
                        play back a series of actions to move the ball from the start to the end in the maze.
                    </li>
                </ol>
            </p>

            <p> 
                You can use a combination of keyboard, mouse, touchscreen, or joystick to control your leg.
            </p>

            <p> 
                Use manual control to move the ball from the Start position to the Goal position.
            </p>

            <h1> Camera Feedback</h1>

            <p> 
                Mount a webcam so that you can watch your leg assembly and the ball.
            </p>

            <p> 
                Implement a program for the camera. I suggest a simple blob/color detector to estimate the position of the ball and angle of the hip of your leg.
            </p>

            <h1> Submissions</h1>

            <p> 
                This assignment must be done in groups of maximal two students.
            </p>

            <p> 
                If you use information or code that is not your own (e.g., sample code from the Internet, ideas for new features from a classmate, etc.), then you must specify this in your assignment write-up. Failure to disclose that you used external sources will lead to disciplinary actions.
            </p>

            <p> 
                To hand in your assignment:
                <ol> 
                    <li> 
                        Create a directory to hold all of your data. The directory name should be STUDENT_ID_aNUMBER, where STUDENT_ID is your student id and NUMBER is the number of the assignment,
                    </li>
                    <li> 
                        Create a directory source inside of the directory STUDENT_ID_aNUMBER.
                    </li>
                    <li> 
                        Put the source code, which may contain of multiple files, for your assignment’s solution into the directory source.
                    </li>
                    <li> 
                        Your program must compile by just running the command make in the source directory or a similar step for your programming language of choice.
                    </li>
                    <li> 
                        Write a README file to explain anything you feel is necessary or important about your submission. This may include special features/bugs of your program. Describe what parts of the assignment you implemented.
                    </li>
                </ol>
            </p>
        </main>

        <footer className="footer">
            Footer here
        </footer>
    </>
  )
}
