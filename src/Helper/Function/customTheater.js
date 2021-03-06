import theaterBhd from "../../Assets/Images/theaterBhd.jpg";
import theaterCgv from "../../Assets/Images/theaterCgv.jpg";
import theaterCineStar from "../../Assets/Images/theaterCineStar.jpg";
import theaterGalaxy from "../../Assets/Images/theaterGalaxy.png";
import theaterLotte from "../../Assets/Images/theaterLotte.jpg";
import theaterMega from "../../Assets/Images/theaterMega.jpeg";
import logoBHD from "../../Assets/Images/logoBHD.png";
import logoCGV from "../../Assets/Images/logoCGV.png";
import logoCinestar from "../../Assets/Images/logoCinestar.png";
import logoGLX from "../../Assets/Images/logoGLX.png";
import logoLotte from "../../Assets/Images/logoLotte.png";
import logoMGS from "../../Assets/Images/logoMGS.png";

export const renderImageTheater = (nameTheater) => {
  switch (nameTheater) {
    case "BHDStar": {
      return logoBHD;
    }
    case "CGV": {
      return logoCGV;
    }
    case "CineStar": {
      return logoCinestar;
    }
    case "Galaxy": {
      return logoGLX;
    }
    case "LotteCinima": {
      return logoLotte;
    }
    case "MegaGS": {
      return logoMGS;
    }
    default:
      return null;
  }
};

export const renderImage = (nameTheater) => {
  switch (nameTheater) {
    case "BHDStar": {
      return theaterBhd;
    }
    case "CGV": {
      return theaterCgv;
    }
    case "CineStar": {
      return theaterCineStar;
    }
    case "Galaxy": {
      return theaterGalaxy;
    }
    case "LotteCinima": {
      return theaterLotte;
    }
    case "MegaGS": {
      return theaterMega;
    }
    default:
      return null;
  }
};

export const renderStyleColor = (nameTheater) => {
  switch (nameTheater) {
    case "BHDStar": {
      return { color: "#8bc541" };
    }
    case "CGV": {
      return { color: "#e71a0f" };
    }
    case "CineStar": {
      return { color: "#df0d7a" };
    }
    case "Galaxy": {
      return { color: "#f60" };
    }
    case "LotteCinima": {
      return { color: "#ca4137" };
    }
    case "MegaGS": {
      return { color: "#e5a813" };
    }
    default:
      return null;
  }
};

export const renderStyleColorBooking = (name) => {
  if (name) {
    const splitName = name.split(" -")[0];
    switch (splitName) {
      case "BHD Star Cineplex": {
        return { color: "#8bc541" };
      }
      case "CGV": {
        return { color: "#e71a0f" };
      }
      case "CNS": {
        return { color: "#df0d7a" };
      }
      case "GLX": {
        return { color: "#f60" };
      }
      case "Lotte": {
        return { color: "#ca4137" };
      }
      case "MegaGS": {
        return { color: "#e5a813" };
      }
      default:
        return null;
    }
  }
};
