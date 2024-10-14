import React from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Header from "./Header";

const ColoredLine = ({ color, height }) => (
  <hr
    style={{
      border: 0,
      backgroundColor: color,
      height: 2,
      width: "100%",
    }}
  />
);

const ConsolidatedResultMemo = () => {
  const studentInfo = {
    name: "Rahul Raj",
    department: "Computer Science and Engineering",
    rollNo: "22MCF1R39",
    year: "II",
    specialization: "Master of Computer Application (MCA)",
    session: "2023-2024",
    sgpa: "7.76",
    cgpa: "7.60",
  };

  const subjects = [
    {
      code: "CS5353",
      name: "Algorithm Analysis and Design",
      credit: 3,
      grade: "B",
    },
    { code: "CS5361", name: "Cloud Computing", credit: 3, grade: "B" },
    {
      code: "CS5356",
      name: "Knowledge Engineering Lab",
      credit: 1,
      grade: "A",
    },
    {
      code: "CS5351",
      name: "Mobile Applications Development",
      credit: 2.5,
      grade: "A",
    },
    {
      code: "CS5354",
      name: "Principles of Data Warehousing and Data Mining",
      credit: 3,
      grade: "C",
    },
    { code: "CS5355", name: "Python Programming", credit: 3, grade: "B" },
    { code: "CS5369", name: "Software Architecture", credit: 3, grade: "D" },
    { code: "CS5352", name: "Software Testing", credit: 3, grade: "B" },
    { code: "CS5357", name: "Software Testing Lab", credit: 1, grade: "B" },
  ];
  return (
    <Container maxWidth="xl">
      <Header resultType="consolidated" />
      <Box mb={3}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={6}>
            <Typography>
              <strong>Name:</strong> {studentInfo.name}
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography>
              <strong>Department:</strong> {studentInfo.department}
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography>
              <strong>Roll No.:</strong> {studentInfo.rollNo}
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography>
              <strong>Year:</strong> {studentInfo.year}
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography>
              <strong>Course:</strong> {studentInfo.specialization}
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography>
              <strong>Exam Session:</strong> {studentInfo.session}
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography>
              <strong>CGPA:</strong> {studentInfo.cgpa}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <ColoredLine color="#D3D3D3" />
      <Box
        mb={2}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around",
        }}
      >
        <Box textAlign={"center"}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Odd Semester
          </Typography>
          <TableContainer component={Paper}>
            <Table
              aria-label="subject table"
              sx={{
                "& .MuiTableCell-sizeMedium": {
                  padding: "10px 16px",
                  borderRight: "1px solid rgba(224, 224, 224, 1)",
                },
                "& .MuiTableCell-head": {
                  borderRight: "1px solid rgba(224, 224, 224, 1)",
                },
                "& .MuiTableCell-body:last-child": {
                  borderRight: "none",
                },
              }}
            >
              <TableHead>
                <TableRow style={{ backgroundColor: "#D3D3D3" }}>
                  <TableCell align="center">
                    <strong>Subject Code</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Subject Name</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Credit</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Grade</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subjects.map((subject, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{subject.code}</TableCell>
                    <TableCell>{subject.name}</TableCell>
                    <TableCell align="center">{subject.credit}</TableCell>
                    <TableCell align="center">{subject.grade}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box textAlign="center" mt={3}>
            <Typography>
              <strong>SGPA:</strong> {studentInfo.sgpa}
            </Typography>
          </Box>
        </Box>

        <Box textAlign={"center"} ml={2}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Even Semester
          </Typography>
          <TableContainer component={Paper}>
            <Table
              aria-label="subject table"
              sx={{
                "& .MuiTableCell-sizeMedium": {
                  padding: "10px 16px",
                  borderRight: "1px solid rgba(224, 224, 224, 1)",
                },
                "& .MuiTableCell-head": {
                  borderRight: "1px solid rgba(224, 224, 224, 1)",
                },
                "& .MuiTableCell-body:last-child": {
                  borderRight: "none",
                },
              }}
            >
              <TableHead>
                <TableRow style={{ backgroundColor: "#D3D3D3" }}>
                  <TableCell align="center">
                    <strong>Subject Code</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Subject Name</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Credit</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Grade</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subjects.map((subject, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{subject.code}</TableCell>
                    <TableCell>{subject.name}</TableCell>
                    <TableCell align="center">{subject.credit}</TableCell>
                    <TableCell align="center">{subject.grade}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box textAlign="center" mt={3}>
            <Typography>
              <strong>SGPA:</strong> {studentInfo.sgpa}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ConsolidatedResultMemo;
