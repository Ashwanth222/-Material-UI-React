import * as React from 'react';
import { BasicButtons } from './components/inputs/Button/Button';
import {BasicButtonGroup} from './components/inputs/button_group/Button_group' 
import {SplitButton} from './components/inputs/button_group/split_button' 
import { Checkboxes } from './components/inputs/checkboxes/Checkboxes'
import { IndeterminateCheckbox } from './components/inputs/checkboxes/InderminateCheckboxes'
import { CheckboxesGroup} from './components/inputs/checkboxes/Form_group'
import {FormControlLabelPosition} from './components/inputs/checkboxes/FormControlLabelPosition'
import {CustomizedCheckbox} from './components/inputs/checkboxes/CustomizedCheckbox'
import {RadioButtonsGroup} from './components/inputs/Radio_group/RadioButtonsGroup'
import {ControlledRadioButtonsGroup} from './components/inputs/Radio_group/ControlledRadioButtonsGroup'
import {RadioButtons} from './components/inputs/Radio_group/RadioButtons'
import {RowRadioButtonsGroup} from './components/inputs/Radio_group/RowRadioButtonsGroup'
import {SizeRadioButtons} from './components/inputs/Radio_group/SizeRadioButtons'
import {FormControlLabelPlacement} from './components/inputs/Radio_group/FormControlLabelPlacement'
import {ErrorRadios} from './components/inputs/Radio_group/ErrorRadios'
import {CustomizedRadios} from './components/inputs/Radio_group/CustomizedRadios'
import {FloatingActionButtons} from './components/inputs/floating_action_buttons/FloatingActionButtons'
import {FloatingActionButtonZoom} from './components/inputs/floating_action_buttons/FloatingActionButtonZoom'
import {BasicRating} from './components/inputs/Rating/BasicRating'
import {HoverRating} from './components/inputs/Rating/HoverRating'
import {CustomizedRating} from './components/inputs/Rating/CustomizedRating'
import { RadioGroupRating } from './components/inputs/Rating/RadioGroupRating';
import { BasicSelect } from './components/inputs/Select/BasicSelect';
import { SelectVariants } from './components/inputs/Select/SelectedVariants';
import { SelectLabels } from './components/inputs/Select/SelectLabels';
import { SelectAutoWidth } from './components/inputs/Select/SelectAutoWidth';
import { ContinuousSlider } from './components/inputs/Slider/ContinuousSlider';
import { DiscreteSlider } from './components/inputs/Slider/DiscreteSlider';
import { DiscreteSliderSteps } from './components/inputs/Slider/DiscreteSliderSteps';
import { DiscreteSliderMarks } from './components/inputs/Slider/DiscreteSliderMarks';
import { DiscreteSliderValues } from './components/inputs/Slider/DiscreteSliderValues';
import { DiscreteSliderLabel } from './components/inputs/Slider/DiscreteSliderLabrl';
import { RangeSlider } from './components/inputs/Slider/RangeSlider';
import { MinimumDistanceSlider } from './components/inputs/Slider/MinimumDistanceSlider';
import { InputSlider } from './components/inputs/Slider/InputSlider';
import { BasicSwitches } from './components/inputs/switches/BasicSwitches';
import { SwitchLabels } from './components/inputs/switches/SwitchLabels';
import { ControlledSwitches } from './components/inputs/switches/ControlledSwitches';
import { SwitchesGroup } from './components/inputs/switches/SwitchesGroup';
import { CustomizedSwitches } from './components/inputs/switches/CustomizedSwitches';
import { BasicTextFields } from './components/inputs/Text_field/BasicTextFields';
import { FormPropsTextFields } from './components/inputs/Text_field/FormPropsTextFields';
import { ValidationTextFields } from './components/inputs/Text_field/ValidationTextFields';
import { MultilineTextFields } from './components/inputs/Text_field/MultilineTextFields';
import { SelectTextFields } from './components/inputs/Text_field/SelectTextFields';
import { InputWithIcon } from './components/inputs/Text_field/InputWithIcon';
import { ToggleButtons } from './components/inputs/toggle_button/ToggleButtons';
import { ToggleButtonSizes } from './components/inputs/toggle_button/ToggleButtonSizes';
import { ColorToggleButton } from './components/inputs/toggle_button/ColorToggleButton';
import { VerticalToggleButtons } from './components/inputs/toggle_button/VerticalToggleButtons';
import { StandaloneToggleButton } from './components/inputs/toggle_button/StandaloneToggleButton';
import { CustomizedDividers } from './components/inputs/toggle_button/CustomizedDividers';
import { ImageAvatars } from './components/data_display/Avatar/ImageAvatars';
import { ComboBox } from './components/inputs/Autocompleteeee/ComboBox';
import { CountrySelect } from './components/inputs/Autocompleteeee/CountrySelect';
import { ControllableStates } from './components/inputs/Autocompleteeee/ControllableStates';
import { FreeSolo } from './components/inputs/Autocompleteeee/FreeSolo';
import { BackgroundLetterAvatars } from './components/data_display/Avatar/BackgroundLetterAvatars';
import { SimpleBadge } from './components/data_display/Badge/SimpleBadge';
import { BadgeVisibility } from './components/data_display/Badge/BadgeVisibility';
import { BadgeOverlap } from './components/data_display/Badge/BadgeOverlap';
import { BasicChips } from './components/data_display/chip/BasicChips';
import {ChipsArray} from './components/data_display/chip/ChipsArray';
import {ListDividers} from './components/data_display/Divider/ListDividers';
import {InsetDividers} from './components/data_display/Divider/InsetDividers';
import {SubheaderDividers} from './components/data_display/Divider/SubheaderDividers';
import { MiddleDividers } from './components/data_display/Divider/MiddleDividers';
import {DividerText} from './components/data_display/Divider/DividerText';
import {VerticalDividers} from './components/data_display/Divider/VerticalDividers';
import {VerticalDividerText} from './components/data_display/Divider/VerticalDividerText';
import {SvgMaterialIcons} from './components/data_display/Icons/SvgMaterialIcons';
import {BasicList} from './components/data_display/List/BasicList';
import {NestedList} from './components/data_display/List/NestedList';
import {FolderList} from './components/data_display/List/FolderList';
import {BasicTable} from './components/data_display/Table/BasicTable';
import {DataTable} from './components/data_display/Table/DataTable';

export default function App() {
  return (
  <>
      <BasicButtons /> 

    <ComboBox/>
   <CountrySelect/>
  <ControllableStates/>
  <FreeSolo/> 
    <BasicButtons /> 
    <BasicButtonGroup/>
    <SplitButton/> 
    <Checkboxes/> 
     <IndeterminateCheckbox/>
    <CheckboxesGroup/>
    <FormControlLabelPosition/>
    <CustomizedCheckbox/> 
     <RadioButtonsGroup/>
    <RowRadioButtonsGroup/>
    <ControlledRadioButtonsGroup/>
    <RadioButtons/> 
   <SizeRadioButtons/>
    <FormControlLabelPlacement/> 
     <ErrorRadios/>
    <CustomizedRadios/> 
    <FloatingActionButtonZoom/> 
     <BasicRating/>
    <HoverRating/>
    <CustomizedRating/>
    <RadioGroupRating/> 
    <BasicSelect/>
    <SelectVariants/>
    <SelectLabels/>
    <SelectAutoWidth/> 
    <ContinuousSlider/> 
    <DiscreteSlider/>
    <DiscreteSliderSteps/>
    <DiscreteSliderMarks/> 
    <DiscreteSliderValues/>
    <RangeSlider/>
    <MinimumDistanceSlider/>
    <InputSlider/> 
     <BasicSwitches/>
    <SwitchLabels/>
    <ControlledSwitches/>
    <SwitchesGroup/>
    <CustomizedSwitches/>
    <FormControlLabelPosition/> 
     <BasicTextFields/>
    <FormPropsTextFields/>
    <ValidationTextFields/>
    <MultilineTextFields/> 
     <SelectTextFields/>
    <InputWithIcon/>
    <ToggleButtons/>
    <ToggleButtonSizes/>
    <ColorToggleButton/>
    <VerticalToggleButtons/>
    <StandaloneToggleButton/>
    <CustomizedDividers/> 
    <ImageAvatars/>
    <BackgroundLetterAvatars/>
    <SimpleBadge/>
    <BadgeVisibility/>
    <BadgeOverlap/>
    <BasicChips/>
    <ChipsArray/>
    <ListDividers/>
    <InsetDividers/>
    <SubheaderDividers/>
    <MiddleDividers/>
    <DividerText/>
    <VerticalDividers/>
    <VerticalDividerText/> 
    <SvgMaterialIcons/>  
 <BasicList/> 
    <NestedList/>
    <FolderList/>
    <BasicTable/>
   <DataTable/>
     
    </>
  );
}

