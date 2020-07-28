import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { useSubheader } from "../../_metronic/layout";
import LoanForm from "./components/loan-form/LoanForm";
import { Card } from "react-bootstrap";
import { CardHeader, CardHeaderToolbar } from "../../_metronic/_partials/controls";

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

      {/*<Card>*/}
      {/*  <CardHeader title="Holidays list">*/}
      {/*    <CardHeaderToolbar>*/}
      {/*      <Link*/}
      {/*          type="button"*/}
      {/*          className="btn btn-success btn-sm"*/}
      {/*          to="/admin/holidays/new"*/}
      {/*      >*/}
      {/*        <i className="ki ki-plus icon-md mr-2"></i>*/}
      {/*        Add Holiday*/}
      {/*      </Link>*/}
      {/*    </CardHeaderToolbar>*/}
      {/*  </CardHeader>*/}
      {/*  <CardBody>*/}
      {/*    <HolidaysTable*/}
      {/*        holidays={holidays}*/}
      {/*        onViewHolidays={this.onViewHolidays}*/}
      {/*        loading={loading}*/}
      {/*        onEditHoliday={this.onEditHoliday}*/}
      {/*    />*/}
      {/*  </CardBody>*/}
      {/*</Card>*/}
      <Card>
        <CardHeader title='Loan Form'>
        </CardHeader>
        <Card.Body>
          <LoanForm fields={this.state.fieldsHDFC}/>
        </Card.Body>
      </Card>
    </>);
  }
};

export default Dashboard;
