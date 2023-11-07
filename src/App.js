import { ComboBox , Country } from "./Autocomplete";
import Basic from "./Button";
import { TextButton, ContainedButton,ColorButton,ButtonSize, IconLabelButton,IconButtons } from "./Button";
import { IconButtonColor, BasicButtonGroup, ButtonGroupOrientation } from "./Button";
import { BasicCheckbox, CheckboxLabel, IconCheckbox } from "./Checkbox";
import { FloatingActionButton } from "./FloatingActionButton";
import { RadioButtonGroup,ErrorRadios } from "./RadioGroup";
import { BasicRating, RatingPrecison } from "./Rating";
import { BasicSelect, SelectAutoWidth } from "./Select";
import { ContinuosSlider, DiscreteSlider, CustomMarks, RestrictedValue, LabelAlwaysVisible } from "./Slider";
import { RangeSlider, VerticalSlider } from "./Slider";
import { BasicSwitch, LabelSwitch } from "./Switch";
import { BasicTextFields,FormPropsTextField, ValidationTextFields, MultilineTextFields } from "./TextField";
import { SelectTextField } from "./TextField";
import { ToggleButtons, ToggleButtonsMultiple } from "./ToggleButton";
import { BasicList, NestedList } from "./List";
import { BasicTable, DataTable } from "./Table";
import { BasicAlert, DescriptionAlert } from "./Alert";
import { ButtonAppBar } from "./AppBar";
import { SimpleBottomNavigation, LabelBottomNavigation } from "./BottomNavigation";
import { Links } from "./Link";
import { BasicPagination, PaginationOutlined, PaginationRounded, PaginationButton } from "./Pagination";
import { BasicSpeedDial, IconSpeedDial } from "./SpeedDial";
import { ColorTabs } from "./Tabs";
export default function app(){
  return(
    <div >
      <h1>Autocomplete</h1>
      <ComboBox />
      <Country />
      <h1>Button</h1>
      <Basic/>
      <br/>
      <TextButton/>
      <br/>
      <ContainedButton/>
      <br/>
      <ColorButton/>
      <br/>
      <ButtonSize/>
      <br/>
      <IconLabelButton/>
      <br/>
      <IconButtons/>
      <br/>
      <IconButtonColor/>
      <br/>
      <h1>Button Group</h1>
      <BasicButtonGroup/>
      <br/><br/>
      <ButtonGroupOrientation/>
      <h1>Checkbox</h1>
      <BasicCheckbox/>
      <br/>
      <CheckboxLabel/>
      <br/>
      <IconCheckbox/>
      <h1>Floating Action Button</h1>
      <FloatingActionButton/>
      <h1>Radio Group</h1>
      <RadioButtonGroup/>
      <br/>
      <ErrorRadios/>
      <h1>Rating</h1>
      <BasicRating/>
      <br/>
      <RatingPrecison/>
      <h1>Select</h1>
      <BasicSelect/>
      <br/>
      <SelectAutoWidth/>
      <h1>Slider</h1>
      <ContinuosSlider/>
      <br/>
      <DiscreteSlider/>
      <br/>
      <CustomMarks/>
      <br/>
      <RestrictedValue/>
      <br/>
      <LabelAlwaysVisible/>
      <br/>
      <RangeSlider/>
      <br/>
      <VerticalSlider/>
      <h1>Switch</h1>
      <BasicSwitch/>
      <br/>
      <LabelSwitch/>
      <h1>Text Field</h1>
      <BasicTextFields/>
      <br/>
      <FormPropsTextField/>
      <br/>
      <ValidationTextFields/>
      <br/>
      <MultilineTextFields/>
      <br/>
      <SelectTextField/>
      <h1>Toggle Button</h1>
      <ToggleButtons/>
      <br/><br/>
      <ToggleButtonsMultiple/>
      <h1>Data Display</h1>
      <h1>List</h1>
      <BasicList/>
      <br/><br/>
      <NestedList/>
      <h1>Table</h1>
      <BasicTable/>
      <br/><br/>
      <DataTable/>
      <h1>Feedback</h1>
      <h1>Alert</h1>
      <BasicAlert/>
      <br/><br/>
      <DescriptionAlert/>
      <br/><br/>
      <h1>Surfaces</h1>
      <h1>App Bar</h1>
      <ButtonAppBar/>
      <h1>Navigation</h1>
      <h1>Bottom Navigation</h1>
      <SimpleBottomNavigation/>
      <br/><br/>
      <LabelBottomNavigation/>
      <h1>Links</h1>
      <Links/>
      <h1>Pagination</h1>
      <BasicPagination/>
      <br/><br/>
      <PaginationOutlined/>
      <br/><br/>
      <PaginationRounded/>
      <br/><br/>
      <PaginationButton/>
      <h1>Speed Dial</h1>
      <BasicSpeedDial/>
      <br/><br/>
      <IconSpeedDial/>
      <h1>Tabs</h1>
      <ColorTabs/>
    </div>
  );
}