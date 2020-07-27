import React, { Component } from "react";
import { useSubheader } from "../../_metronic/layout";
import LoanForm from "./components/loan-form/LoanForm";
import { Card } from "react-bootstrap";
import { CardHeader } from "../../_metronic/_partials/controls";

class Dashboard extends Component {
  // const suhbeader = useSubheader();
  // suhbeader.setTitle("Loan Form");
  state = {
    fields:[
        {
          placeholder:"Client ID",
          name: "clientID",
          input_type:"text",
          required:true
        },
      {
        placeholder:"GSTIN",
        name: "GSTIN",
        input_type:"text",
        required:true
      },
      {
        placeholder:"Cersai Number",
        name: "cersaiNumber",
        input_type:"text",
        required:true
      },
      {
        placeholder:"Bank Statement Document ",
        name: "bankStatementDocument",
        input_type:"text",
        required:true
      }
        ],
    fieldsHDFC:[
      {
        placeholder:"Client ID",
        name: "clientID",
        input_type:"text",
        required:true
      },
      {
        placeholder:"Product name",
        name: "productName",
        input_type:"text",
        required:true
      },
      {
        placeholder:"Product type",
        name: "productType",
        input_type:"text",
        required:true
      },
      {
        placeholder:"CIBIL Score",
        name: "CIBILScore",
        input_type:"text",
        required:true
      },
      {
        placeholder:"Company Name",
        name: "companyName",
        input_type:"text",
        required:true
      },
      {
        placeholder:"Company PAN",
        name: "companyPAN",
        input_type:"text",
        required:true
      },
      {
        placeholder:"Company PAN Document",
        name: "companyPANDocumnet",
        input_type:"text",
        required:true
      }
    ]


  };

  render() {
    return (<>
      <Card>
        <CardHeader title='Loan Form'></CardHeader>
        <Card.Body>
          <LoanForm fields={this.state.fieldsHDFC}/>
        </Card.Body>
      </Card>
    </>);
  }
};

export default Dashboard;
