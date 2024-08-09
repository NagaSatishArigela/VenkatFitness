import PropTypes from "prop-types";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";

const SliderArrow = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton
      sx={{
        backgroundColor: "background.paper",
        color: "primary.main",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        },
        bottom: "-48px !important",
        left: "unset !important",
        right: type === "prev" ? "60px !important" : "0 !important",
        zIndex: 10,
        boxShadow: 1,
        gap: 2,
        position: "absolute",
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === "next" ? (
        <IconArrowForward sx={{ fontSize: 22 }} />
      ) : (
        <IconArrowBack sx={{ fontSize: 22 }} />
      )}
    </IconButton>
  );
};

SliderArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default SliderArrow;
