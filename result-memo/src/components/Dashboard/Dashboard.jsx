import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import IndvidualResult from "../ResultMemo/IndividualResultMemo";
import ConsolidatedResult from "../ResultMemo/ConsolidatedResultMemo";
import Academic from "../../assets/academic.png";
import Account from "../../assets/account.png";
import Hostel from "../../assets/hostel.png";

const Dashboard = () => {
  const [showResult, setShowResult] = React.useState(false);
  const handlePaperClick = () => {
    setShowResult(true);
  };

  const renderPaper = (title, onClick, imgSrc) => (
    <Paper
      sx={{
        p: 2,
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "primary.main",
        cursor: "pointer",
        height: 180,
      }}
      onClick={onClick}
    >
      <Typography variant="h4" color="white">
        {title}
      </Typography>
      {imgSrc && (
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "flex-end",
            width: "50%",
          }}
        >
          <img
            src={imgSrc}
            alt={title}
            width={120}
            height={120}
            style={{ color: "white" }}
          />
        </Box>
      )}
    </Paper>
  );

  return showResult ? (
    <Box sx={{ display: "flex", mt: 3, gap: 2 }}>
      <Paper
        sx={{
          p: 2,
          textAlign: "center",
          backgroundColor: "primary.main",
          cursor: "pointer",
          width: "fit-content",
          height: "fit-content",
          borderRadius: 50,
        }}
        onClick={() => setShowResult(false)}
      >
        <Typography variant="h6" color="white">
          Back
        </Typography>
      </Paper>
      {/* <IndvidualResult /> */}
      <ConsolidatedResult />
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#e3e5fc",
        borderRadius: 2,
        p: 2,
        gap: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Hi, Rahul
      </Typography>
      <Box sx={{ display: "flex", gap: 3 }}>
        {renderPaper("Academic", handlePaperClick, Academic)}
        {renderPaper("Account", handlePaperClick, Account)}
        {renderPaper("Hostel", handlePaperClick, Hostel)}
      </Box>
    </Box>
  );
};

export default Dashboard;
