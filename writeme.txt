Introduction
Dementia is a general term describing a group of symptoms that impairment human memory, communication, and thinking. According to a report in 2015 46.8 million people are suﬀer from dementia around the world. If dementia has been detected at an early stage of the disease, we can delay its progress by drugs, therapy or rehabilitation. In many cases, family members detect dementia. However, the elderly whom are living alone may be suﬀer from advance symptoms because nobody noticed their rare actions. To detect dementia at an early stage even if the subject lives alone, we proposed an early detection system of dementia using various sensors. In previous study, we acquired 7 kinds of behavior by questionnaire from 3 subjects with dementia. Then we analysed  the data and successfully diagnosed two of them suﬀered from dementia. Then we analysed the data and successfully diagnosed two of them suﬀered from dementia. Behavior at an early stage are many and diﬀerent from patient to another. Therefore, we should collect data from various patients and by considering their lifestyle background (e.g. personal character and environment) Therefore, if we imply that, we can analyze various symptoms of dementia. The questionnaire is burdensome for the subject, so a reliable device that collects typical behavior of dementia is also more eﬀective In recent years, Japanese society has been suﬀering from aging. There have been many studies estimating the number of elderly people living alone will be increasing frighteningly. Moreover, patients who suﬀered from senile dementia also would be increasing. Dementia is disorder of memory and judgement caused by dying brain cell. Therefore, patients suﬀering from dementia are unable to live with ordinary social life. If dementia has been detected at an early stage, the progress of disease can be slowed. Therefore, early detection of dementia is essential to the patient’s therapy. Usually, housemates can detect dementia by noticing the subject being temperamental person. However, it is diﬃcult to diagnose dementia at an early stage of the progression in elderly subjects living alone.

Motivation 
It diﬃcult to determine dementia for a person who lives alone. Medical test which required to carried  out for the conﬁrmation of dementia are time consuming process. There is no single test for dementia disease. Instead, physicians (often with the help of specialists such as neurologists, neuropsychologists, geriatricians and geriatric psychiatrists) use a variety of approaches and tools to help make a diagnosis.24*7 attention is required for 3rd stage dementia patient.

Problem Deﬁnition and Objectives
In the proposed system, sensors obtain behavior of elderly people living alone. Then, suspicion of dementia is determined by calculating a score of sensed behavior. Diﬀerent analytical methods are applied to determine suspicion of senile dementia. 

Objectives
	If dementia has been detected at an early stage of the disease, we can delay its progress by drugs, therapy or rehabilitation.
	To detect dementia at an early stage even if the subject lives alone, we propose an early detection system of dementia using various sensors.
	Determine the dementia at initial  at stage.
	To help the care takers of the patients.

Project Scope and Limitations
Project scope of the System
	This System is also implemented for  such people which are diagnosis with dementia.
	 We can also propose a system which will provide a facility to give a notifications/message to their care takers that they are safe after some specific time interval.

Limitation of the System
	If there is a hardware or power failure , then system will not work.
	 Internet connection is required  all time.
	There is need of active user who handle that dementia’s people record.

Methodologies of Problem solving
The Proposed system takes input through sensors which is installed in the area where the person is  living. Each sensor provide information about the activity of person. Then this input is given to the raspberry pie where KNN algorithm is applied on the input to produce output of the system. which determines to person having dementia or not. All the data is store on cloud. If the  person having dementia then  notification is send to their care takes  though message or email.
Steps
•	To install the sensor.
•	Sending each sensor information.
•	Analysis using KNN algorithm.
•	Judging suspicion of dementia.
•	Save data over the internet.
•	Contacting care takers and family by notification.





















Project Plan
Project Estimate
Reconciled Estimates
The model followed is the Constructive Cost Model (COCOMO) for estimating the eﬀort required in completing the project. Like all the estimation models, the COCOMO model requires sizing information. This information can be speciﬁed in the form of :
•	Object Point 
•	Function Point(FP) 
•	Lines of Source Code(LOC)
For our project, we use the sizing information in the form of Lines of Source Code.
•	 Total Lines of Code for our project , KLOC=1k (approx).
•	 Cost of each person per month, Cp =Rs.45 /- (per person-hour)
Equations
	The initial effort (Ei) in man months is calculated using the equation:

E = a * (KLOC)^b

Where, a=3.0,b=1.12, for a semi-detached project
E=Efforts in person-hour

D = a *(E)^b

Where, a=2.5 ,b=0.32, for a semi-detached project
D=Duration of project in months.

Semi detached project:
	Project of moderate size and complexity, where teams with mixed experience levels must meet a mixed rigid and less than rigid requirements (project midway between embedded and organic types).

•	Equation for calculation of Number of people required for completion of project, using the COCOMO model is:

N = E/D
	
Where N=Number of people required
E=Efforts in person-month
D=Duration of project in months

•	Equation for calculation of Cost of Project, using the COCOMO model is:

C = D* Cp*hrs
Where,
C=Cost of project
D=Duration in hours
Cp=Cost incurred per person-hour
Hrs=hours

Efforts
					E = 3.0*(5.2)^1.12
E=22.31peron-months
Total of 22.31 person-months are required to complete the project successfully.

Duration of project
D = 2.0*(E)^0.32 
D = 6.75 months
The approximate duration of project is 7 months.

Number of people required for the project
N=22.31/7
N=3.83
N=4 people
Therefore 4 people are required to successfully complete the project on schedule.

Cost of project

           Software Cost

C=4*45*45=8100/-

Therefore, the software cost of project is 8100/-(approx.)

Hardware Cost

Hardware cost of project is 7000/-(approx)

	Therefore, the Total Cost of Project is 15000/-(approx) 

Project Plan
People
Hardware
•	System - Windows 7,8,10/Linux
•	RAM: - 1 GB
•	Hard Disk: - 250 GB
•	Raspberry pi.
•	Sensors(pressure, smoke, IR, Motion)
•	Button, Buzzer.
Software
•	Programming Language - Python
•	Browser.
•	Cloud Services.
Risk Management w.r.t. NP Hard Analysis
Risk Identification
•	Are requirements fully  understood  by the software engineering team and its user?
-Yes
•	Do end-users have realistic expectations?
- Yes
•	Does the software engineering team have the right mix of skills?
- Yes
•	Are project requirements stable?
- Yes

•	Is the number of people on the project team adequate to do the job?
- Yes

•	Do all customer/user constituencies agree on the importance of the project and on the requirements for the system/product to be built?
- Yes
Risk Analysis
The risks for the Project can be analysed within the constraints of time and quality.

 ID	
Risk Description	
Probability	Impact
			Schedule	Quality	Overall

1	
If GUI not working properly	
Low	
Low	
High	
High

2	
Hardware Not working properly	
Low	
Low	
High	
High
3	Internet Connection Failure	Low	Low	High	High
				Risk Table

Probability 	
Value	
Description

High	
Probability of occurrence is	
>75%

Medium	
Probability of occurrence is	
26-75%

Low	
Probability of occurrence is	
<25%
	
			Risk Probability definitions

Overview of Risk Mitigation, Monitoring, Management
Following are the details for each risk:
				Risk Impact definitions

Impact 	
Value	
Description

Very High	
>10%	Schedule impact or Unacceptable
quality

High	
5-10%	Schedule impact or Some parts of the project have low quality

Medium	
<25%	Schedule impact or Barely noticeable
degradation in quality Low
Impact on schedule or Quality
can be incorporated






Risk 1
Risk ID	1
Risk Description	If GUI not working properly.
Category	Designing Side
Source	System will require proper designer and working flow decided properly.
Probability	Low
Impact 	High
Response	Mitigate
Strategy	Strategy
Risk Status	Occurred


Risk 2
Risk ID	2
Risk Description	If Hardware not working properly.
Category	Hardware Part
Source	System will require good quality hardware and connections.
Probability	Low
Impact 	High
Response	Mitigate
Strategy	Strategy
Risk Status	Occurred




					Risk 3
Risk ID	3
Risk Description	Internet connection Failure
Category	-
Source	System will require proper internet and all time.
Probability	Low
Impact 	High
Response	Mitigate
Strategy	Strategy
Risk Status	Occurred


Project Schedule
Project Task Set
Major Tasks in the Project stages are:
•	Task 1: Literature Survey
•	Task 2: Study of Base paper
•	Task 3: Implementation of Base Paper
•	Task 4: Other Extra Modules Implementation
•	Task 5: Testing/ Document Writing


Task Network










Timeline Chart
	 


Team Organization
 
Proper project team organization is one of the key constraints to project success. If  the project has no productive and well-organized team, there’s an increased probability that this project will be failed at the very beginning because initially the team is unable to do the project in the right manner. Without right organization of teamwork, people who form the team will fail with performing a number of specific roles and carrying out a variety of group/individual responsibilities. Hence, when you plan for a new project, first you must take care of the best project team organization through team building activities. A Project Team is an organized group of people who are involved in performing shared/individual tasks of the project as well as achieving shared/individual goals and objectives for the purpose of accomplishing the project and producing its results. Three Conventional Roles Every team, regardless of the project type, size and nature, has three roles (defined as “conventional”). These roles are:
1. Leader. A project team leader is a person who provides leadership and guidance to
the team and takes responsibility for the results of teamwork. The team leader role involves the development and encouragement of the team through training, leading, motivation, recognition, rewarding and other activities that stimulate or force team members to do the required tasks.
2. Member. A project team member is a person who is actually involved in doing assigned tasks. Team members directly access the project and actively evolve its processes. They are subordinated to the team leader.

Team structure

All the work is divided into four members as shown below,
1. Akanksha Kale(Leader): UML Diagrams, Design analysis, Risk Analysis.
2.Uday Bhoi (Member): Requirement Analysis, System Designing, Programming.
3.Neha Kasar (Member): Literature Survey, Software Testing, Risk Analysis.
4.Sikandar Thakur(Member): Design Analysis, Testing, Programming.

Management reporting and communication

Table shows management reporting and communication as shown below:

Period	Work Plan Topics	Work Done Space
2-7 to 7-7	Start of project topic search	Start of project topic search
9-7 to 14-7	Discussion on various topics
with guide	Discussion on various topics
with guide
16-7 to 21-7	Discussion on various topics
with guide	Finalization of project topics
23-7 to 28-7	Finalization of topics	Searching on project related to topics
20-8 to 25-8	Finalization of project content	Preparation of synopsis
27-8 to 1-9	Preparation of synopsis	Submission of synopsis
3-9 to 8-9	Submission of synopsis	Finding history of topics
10-9 to 15-9	Finding history of topics	Creating and Finalizing
block diagram of project
17-9 to 22-9	Creating and Finalizing
block diagram of project	Study of Python language in detail.
24-9 to 29-9	Python language learning	Coding for stage 1
1-10 to 6-10	Coding of module 1	Coding for stage 1
8-10 to 13-10	Study Of Raspberry pi	Learning of raspberry pi
15-10 to 
20-10	Preparation of PPT and
project report in Latex	Preparation of PPT and
project report in Latex
22-10 to 
27-10	Presentation of project Stage 1	Preparation of PPT and
project report in Latex
29-10	Submission of project report	Presentation of project stage 1
30-10	Coding of module 1	Submission of project report
1-1 to 5-1	Coding of module II	
7-1 to 12-1	Hardware implementation 1	
14-1 to 19-1	Hardware Implementation 2	
21-1 to 26-1	Evaluating performance of
system	
28-1 to 2-2	Trial and error method
applications	
4-2 to 9-2	Removing errors if present in
overall system	
11-2 to 16-2	Finalizing project	
18-2 to 23-2	Preparation of project report	
25-2 to 2-3	Preparation of PPT	
4-3 to 9-3	Preparation of paper base on
project result	
11-3 to 16-3	Presentation to guide	
18-3 to 23-3	Submission of project report	










