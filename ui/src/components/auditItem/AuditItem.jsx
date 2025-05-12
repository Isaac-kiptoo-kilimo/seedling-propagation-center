import Container from "./AuditItemCSS";
import { format } from "date-fns";

const AuditItem = ({
  action,
  message,
  performedBy,
  timestamp,
  user,
  index,
}) => {
  return (
    <Container>
      <div className="audit__detail audit__detail--index">
        <p className="audit__value">{index + 1}</p>
      </div>
      <div className="audit__detail">
        <span>user: </span>
        <p className="audit__value">{`${performedBy?.fullName || "test"}`}</p>
      </div>
      <div className="audit__detail">
        <span>role: </span>
        <p className="audit__value">{performedBy?.role || "test role"}</p>
      </div>
      <div className="audit__detail">
        <span>activity: </span>
        <p className="audit__value">{action}</p>
      </div>
      <div className="audit__detail">
        <span>timestamp: </span>

        <p className="audit__value">
          {format(timestamp, "dd/MM/yyyy (h:mm a)")}
        </p>
      </div>
      <div className="audit__detail">
        <span>message: </span>
        {/* <p className="audit__value">
          {message}{" "}
          <span
            style={{
              display: "inline",
              fontWeight: "400",
              color:
                code === 2
                  ? "var(--success)"
                  : code === 4
                  ? "#eed202"
                  : "var(--red-clr)",
            }}
          >
            ({statusCode})
          </span>
        </p> */}
      </div>
    </Container>
  );
};

export default AuditItem;
