// please be familiar with react-bootstrap-table-next column formaters
// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Work%20on%20Columns&selectedStory=Column%20Formatter&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
import React from "react";
import moment from 'moment';

export function LoansColumnFormatter(cellContent, row,
                                     rowIndex, { onViewHolidays }) {
  let holidays = row.holidays.length >= 2 ? row.holidays.slice(0, 2) : row.holidays;

  return (
    <span>
      {holidays.map(holiday => (
        <span key={holiday}> {moment(holiday).format('DD MMM YYYY')}, </span>
      ))}
      {row.holidays.length >= 2 && (<>...
        <button type="button" className="link-button" onClick={() => onViewHolidays(row)}>View</button>
      </>)
      }
    </span>
  );
}
