import React, { Component } from "react";
import { useSubheader } from "../../_metronic/layout";
import LoanForm from "./components/loan-form/LoanForm";
import { Card } from "react-bootstrap";
import { CardHeader } from "../../_metronic/_partials/controls";

class Dashboard extends Component {
  // const suhbeader = useSubheader();
  // suhbeader.setTitle("Loan Form");
  state = {

  };

  render() {
    return (<>
      <Card>
        <CardHeader title='Loan Form'></CardHeader>
        <Card.Body>
          <LoanForm />
        </Card.Body>
      </Card>
    </>);
  }
};

export default Dashboard;
