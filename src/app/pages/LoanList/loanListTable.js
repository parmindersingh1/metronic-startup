import React from 'react';
import {Pagination} from '../../../_metronic/_partials/controls'
import * as columnFormatters from "./column-formatters";
import paginationFactory, {PaginationProvider} from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import {PleaseWaitMessage, NoRecordsFoundMessage} from '../../../_metronic/_helpers';


const LoanListTable = (props) => {
    const {loanListData, loading} = props;

    const columns = [
        {
            dataField: 'name',
            text: 'Name'
        },
        {
            dataField: 'dateOfBirth',
            text: 'Dte Of Birth',
            // formatter: columnFormatters.DaysColumnFormatter
        },
        {
            dataField: 'gender',
            text: 'Gender'
        }
        , {
            dataField: "action",
            text: "Actions",
            formatter: columnFormatters.ActionsColumnFormatter,
            formatExtraData: {
                onEditLoan: props.onEditLoan,
                openDeleteLoanDialog: props.openDeleteLoanDialog,
            },
            classes: "text-right pr-0",
            headerClasses: "text-right pr-3",
            style: {
                minWidth: "100px",
            },
        },
    ];
    return (<>
        <PaginationProvider
            pagination={paginationFactory({
                custom: true,
                totalSize: (loanListData || []).length,
                page: 1,
                sizePerPage: 10,
                hideSizePerPage: (loanListData || []).length === 0,
                sizePerPageList: [
                    {
                        text: "10",
                        value: 10
                    },
                    {
                        text: "25",
                        value: 25
                    },
                    {
                        text: "50",
                        value: 50
                    }
                ]
            })}
            keyField="id"
            columns={columns}
            data={(loanListData || [])}

        >
            {({paginationProps, paginationTableProps}) => (
                <Pagination
                    isLoading={loading}
                    paginationProps={paginationProps}
                    hideToolbar={true}
                >
                    <BootstrapTable
                        wrapperClasses="table-responsive"
                        bordered={false}
                        classes="table table-head-custom table-vertical-center"
                        keyField='id'
                        data={loanListData ? loanListData : []}
                        columns={columns} noDataIndication={<div className='text-center'>No Holiday Found</div>}
                        {...paginationTableProps} >
                        <PleaseWaitMessage entities={loanListData}/>
                        <NoRecordsFoundMessage entities={loanListData}/>
                    </BootstrapTable>
                </Pagination>
            )}
        </PaginationProvider>
    </>);
}

export default LoanListTable;
