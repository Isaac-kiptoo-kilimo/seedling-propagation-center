import Container from './AdminAuditPageCSS';
import {
  AuditItem,
  LoadingSpinner
} from "../../components";
import { useState } from "react";
import { useGetAuditLogsQuery } from '../../features/auditLogs/AuditLogApi';

const AdminAuditPage = () => {
  const [searchQuery, setSearchQuery] = useState({ page: 1 });
  const { isLoading, isError, data } = useGetAuditLogsQuery(searchQuery);

  return (
    <Container>
      <div className="audit-container">
        {isLoading ? (
          <div className="audit__loading">
            <LoadingSpinner />
          </div>
        ) : isError? (
          <div className="audit__error">
            <p className="error__text">something went wrong...</p>
          </div>
        ) : data && data.length === 0 ? (
          <div className="audit__zero">
            <p className="zero__text">no audits to display</p>
          </div>
        ) : (
          <div className="audit__body">
            <div className="audit__head">
              <h5 className="head__title">#</h5>
              <h5 className="head__title">user</h5>
              <h5 className="head__title">role</h5>
              <h5 className="head__title">activity</h5>
              <h5 className="head__title">timestamp</h5>
              <h5 className="head__title">message</h5>
            </div>
            <div className="audit__grid">
              {data &&
                data.map((audit, index) => {
                  return <AuditItem key={audit._id} {...audit} index={index} />;
                })}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default AdminAuditPage;
