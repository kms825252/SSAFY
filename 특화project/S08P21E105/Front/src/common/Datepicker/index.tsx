import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';

import { addDays, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { DateRange, DayPicker } from 'react-day-picker';

const pastMonth = new Date(2020, 10, 15);

const Datepicker = () => {
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }

  return (
    <DayPicker
      mode="range"
      defaultMonth={pastMonth}
      selected={range}
      footer={footer}
      onSelect={setRange}
      locale={ko}
      showOutsideDays
    />
  );
};

export default Datepicker;
