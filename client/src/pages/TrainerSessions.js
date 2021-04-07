import React from 'react';
import { Container } from 'react-bootstrap';
import Sessions from "../components/Sessions";

function TrainerSessions() {

	// ===========================================================================
	// Needs
	// ===========================================================================
	//  - Function to handle session info
	//      - Use js-booking-calendar for grabbing session information
	//      - When a session is clicked, popup menu displays giving option to:
	// 			- Go to Client's profile page (ClientProfile)
	//          - Call Client
	//          - Delete Session
	//          - Possibly add session information to local calendar app
	//      - Once option is made and handled, route trainer to 'ClientProfile' pg
	//  - Props for:
	//      - Client's names               	   		(Used in table)
	//      - All sessions trainer has for week		(Used in table)
	//      - Client's phone number             	(Used as option when selecting session)

	return (
		<div>
			<div id="trainer-sessions">
				<Container className="text-center justify-content-center">
					<br></br>
					{/* Will give the sessions of the current day and two days coming after */}
					{/* Checks to see what time they are scheduled */}
					
					<Sessions />

					{/* <Row className="text-center justify-content-center">
						<Col xs={6}>
							<h3>Today</h3>
						</Col>
					</Row>
					<Row className="text-center justify-content-center">
						<Col xs={6}>
							<Button block hover variant="outline-secondary" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
								12:15 pm<span>&nbsp;with&nbsp;</span><span id="sessionName">Alex</span>
							</Button>
							<Button block hover variant="outline-secondary" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
								1:45 pm<span>&nbsp;with&nbsp;</span><span id="sessionName">Bobby</span>
							</Button>
							<Button block hover variant="outline-secondary" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"  href="/client-profile">
								3:15 pm<span>&nbsp;with&nbsp;</span><span id="sessionName">Daniel</span>
							</Button>
							<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                    <p>What would you like to do?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                         <a href="/client-profile" button type="button" className="btn btn-primary">Clients Profile Page</a>
                                         <a href="tel:123-456-7890" button type="button" className="btn btn-primary">Call Client</a>
                                        <button type="button" className="btn btn-primary">Delete Session</button>
                                    </div>
                                </div>
                            </div>
                        </div>
						</Col>
					</Row> */}
					<br />

					<br />
				</Container>
			</div>
		</div>
	);
}

export default TrainerSessions;
