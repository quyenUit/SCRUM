import { months, weekDays } from "@/data/japan_th";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

export default function DatePickerCommonExpand() {

  return (
    <div>
      <DatePicker
        style={{
          width: '85%',
          boxSizing: 'border-box',
          height: '34px',
        }}
        containerStyle={{
          marginTop: '-8px',
          width: '85%',
        }}
        format="YYYY/MM/DD HH:mm"
        formattingIgnoreList={["Date", "Time"]}
        plugins={[<TimePicker position="bottom" />]}
        weekDays={weekDays}
        months={months}
        calendarPosition="bottom"
      />
    </div>
  );
}
