import Database from "better-sqlite3";

const db = Database("./db/data.db", { verbose: console.log });

const applicants = [
  {
    name: "John",
    position: "FrontEnd Developer",
    age: 25,
  },
  {
    name: "Ben",
    position: "FrontEnd Developer",
    age: 20,
  },
  {
    name: "Jim",
    position: "FrontEnd Developer",
    age: 29,
  },
  {
    name: "Andy",
    position: "FrontEnd Developer",
    age: 28,
  },
];
const interviewers = [
  {
    name: "Ed",
    email: "Ed@ed.com",
    position: "FrontEnd Developer",
  },
  {
    name: "Nicolas",
    email: "nico@nico.com",
    position: "FullStack Developer",
  },
];
const interviews = [
  {
    applicantId: 1,
    interviewerId: 2,
    time: "22/10/2022",
    successful: "Yes",
  },
  {
    applicantId: 2,
    interviewerId: 1,
    time: "23/10/2022",
    successful: "No",
  },
  {
    applicantId: 3,
    interviewerId: 2,
    time: "24/10/2022",
    successful: "No",
  },
  {
    applicantId: 4,
    interviewerId: 1,
    time: "25/10/2022",
    successful: "No",
  },
  {
    applicantId: 2,
    interviewerId: 2,
    time: "22/10/2022",
    successful: "Yes",
  },
];
const companies = [
  {
    id: 1,
    name: "Apple",
    city: "Tirana",
  },
  {
    id: 2,
    name: "Google",
    city: "Prishtina",
  },
];
const employers = [
  {
    id: 1,
    interviewerId: 1,
    companyId: 1,
  },
  {
    id: 2,
    interviewerId: 2,
    companyId: 2,
  },
];
// const deleteTable = db.prepare(`
// DROP TABLE applicants
// `);
// deleteTable.run();
// const deleteTable1 = db.prepare(`
// DROP TABLE applicants
// `);
// deleteTable1.run();
// const deleteTable2 = db.prepare(`
// DROP TABLE interviewers
// `);
// deleteTable2.run();
// const deleteTable3 = db.prepare(`
// DROP TABLE interviews
// `);
// deleteTable3.run();

const deleteApplicants = db.prepare(`
DELETE FROM  applicants;
`);
deleteApplicants.run();

const createApplicantsTable = db.prepare(`
CREATE TABLE IF NOT EXISTS applicants(
    id INTEGER,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    age INTEGER,
    PRIMARY KEY (id)
)
`);
createApplicantsTable.run();

const createApplicant = db.prepare(`
 INSERT INTO applicants(name,position,age) VALUES(@name,@position,@age);
`);

for (let applicant of applicants) {
  createApplicant.run(applicant);
}

const deleteInterviewers = db.prepare(`
DELETE FROM  interviewers;
`);
deleteInterviewers.run();

const createInterviewersTable = db.prepare(`
CREATE TABLE IF NOT EXISTS interviewers(
    id INTEGER,
    name TEXT,
    email TEXT,
    position TEXT,
    PRIMARY KEY (id)
)
`);
createInterviewersTable.run();

const createInterviewer = db.prepare(`
INSERT INTO interviewers(name,email,position)
VALUES(@name,@email,@position)
`);
for (let interviewer of interviewers) {
  createInterviewer.run(interviewer);
}

const deleteInterviews = db.prepare(`
DELETE FROM  interviews;
`);
deleteInterviews.run();

const createInterviewsTable = db.prepare(`
CREATE TABLE IF NOT EXISTS interviews(
    id INTEGER,
    applicantId INTEGER,
    interviewerId INTEGER,
    time TEXT,
    successful TEXT,
    PRIMARY KEY (id)
)
`);
createInterviewsTable.run();

const createInterview = db.prepare(`
INSERT INTO interviews(applicantId,interviewerId,time,successful)
VALUES(@applicantId,@interviewerId,@time,@successful)
`);
for (let interview of interviews) {
  createInterview.run(interview);
}

const deleteCompanies = db.prepare(`
DELETE FROM  companies;
`);
deleteCompanies.run();

const createCompanyTable = db.prepare(`
CREATE TABLE IF NOT EXISTS companies(
  id INTEGER,
  name TEXT,
  city TEXT,
  PRIMARY KEY(id)
)
`);
createCompanyTable.run();

const createCompany = db.prepare(`
INSERT INTO companies(name,city)
VALUES(@name,@city)
`);
for (let company of companies) {
  createCompany.run(company);
}

const deleteEmployers = db.prepare(`
DELETE FROM  employers;
`);
deleteEmployers.run();

const createEmployersTable = db.prepare(`
CREATE TABLE IF NOT EXISTS employers(
  id INTEGER,
  interviewerId INTEGER,
  companyId INTEGER,
  PRIMARY KEY(id)
)
`);
createEmployersTable.run();

const createEmployer = db.prepare(`
INSERT INTO employers(interviewerId,companyId)
VALUES(@interviewerId,@companyId)
`);
for (let employer of employers) {
  createEmployer.run(employer);
}
