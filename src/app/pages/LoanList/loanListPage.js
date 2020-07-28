import React,{Component} from "react";
import {Link} from 'react-router-dom';
import LoanListTable from './loanListTable';
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";

class LoanListPage extends Component {
    state = {
        loanListData: [
            {
                id: "4545rff45re4",
                name: 'Pratik',
                dateOfBirth: "13th Auguest",
                gender: "male"
            },
            {
                id: "656kkkjkksds778",
                name: 'Arjun',
                dateOfBirth: "15th July",
                gender: "male"
            }

        ],
    };

    componentDidMount() {

    }

    // onViewLoan = (loan) => {
    //     console.log("id", loan);
    //     this.setState({ showLoan: true, selectedLoan: loan });
    // };

    onEditLoan = (id) => {
        console.log("id", id);
        this.props.history.push(`/loanList/${id}/edit`);
    };

    onHideLoan = () => {
        this.setState({ showLoan: false, selectedLoan: null });
    };

    openDeleteLoanDialog = () => {
        console.log("Items deleted")
    }

    render() {
        let {loanListData} = this.state;
        return(

            <Card>
                <CardHeader title="Loan list">
                    <CardHeaderToolbar>
                        <Link
                            type="button"
                            className="btn btn-success btn-sm"
                            to="/loanList"
                        >
                            <i className="ki ki-plus icon-md mr-2"></i>
                            New Loan
                        </Link>
                    </CardHeaderToolbar>
                </CardHeader>
                <CardBody>
                    <LoanListTable
                        loanListData={loanListData}
                        // onViewLoans={this.onViewLoan}
                        // loading={loading}
                        openDeleteLoanDialog={this.openDeleteLoanDialog}
                        onEditLoan={this.onEditLoan}
                    />
                </CardBody>
            </Card>
        )
    }
}
export default LoanListPage;