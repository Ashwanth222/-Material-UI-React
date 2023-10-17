import * as React from 'react';
import { BasicButtons } from './components/inputs/Button/Button';
import { BasicButtonGroup } from './components/inputs/button_group/Button_group'
import { SplitButton } from './components/inputs/button_group/split_button'
import { Checkboxes } from './components/inputs/checkboxes/Checkboxes'
import { IndeterminateCheckbox } from './components/inputs/checkboxes/InderminateCheckboxes'
import { CheckboxesGroup } from './components/inputs/checkboxes/Form_group'
import { FormControlLabelPosition } from './components/inputs/checkboxes/FormControlLabelPosition'
import { CustomizedCheckbox } from './components/inputs/checkboxes/CustomizedCheckbox'
import { RadioButtonsGroup } from './components/inputs/Radio_group/RadioButtonsGroup'
import { ControlledRadioButtonsGroup } from './components/inputs/Radio_group/ControlledRadioButtonsGroup'
import { RadioButtons } from './components/inputs/Radio_group/RadioButtons'
import { RowRadioButtonsGroup } from './components/inputs/Radio_group/RowRadioButtonsGroup'
import { SizeRadioButtons } from './components/inputs/Radio_group/SizeRadioButtons'
import { FormControlLabelPlacement } from './components/inputs/Radio_group/FormControlLabelPlacement'
import { ErrorRadios } from './components/inputs/Radio_group/ErrorRadios'
import { CustomizedRadios } from './components/inputs/Radio_group/CustomizedRadios'
import { FloatingActionButtons } from './components/inputs/floating_action_buttons/FloatingActionButtons'
import { FloatingActionButtonZoom } from './components/inputs/floating_action_buttons/FloatingActionButtonZoom'
import { BasicRating } from './components/inputs/Rating/BasicRating'
import { HoverRating } from './components/inputs/Rating/HoverRating'
import { CustomizedRating } from './components/inputs/Rating/CustomizedRating'
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
import { ChipsArray } from './components/data_display/chip/ChipsArray';
import { ListDividers } from './components/data_display/Divider/ListDividers';
import { InsetDividers } from './components/data_display/Divider/InsetDividers';
import { SubheaderDividers } from './components/data_display/Divider/SubheaderDividers';
import { MiddleDividers } from './components/data_display/Divider/MiddleDividers';
import { DividerText } from './components/data_display/Divider/DividerText';
import { VerticalDividers } from './components/data_display/Divider/VerticalDividers';
import { VerticalDividerText } from './components/data_display/Divider/VerticalDividerText';
import { SvgMaterialIcons } from './components/data_display/Icons/SvgMaterialIcons';
import { BasicList } from './components/data_display/List/BasicList';
import { NestedList } from './components/data_display/List/NestedList';
import { FolderList } from './components/data_display/List/FolderList';
import { BasicTable } from './components/data_display/Table/BasicTable';
import { DataTable } from './components/data_display/Table/DataTable';
import BasicTooltip from './components/data_display/Tooltip/BasicTooltip';
import PositionedTooltips from './components/data_display/Tooltip/PositionedTooltips';
import CustomizedTooltips from './components/data_display/Tooltip/CustomizedTooltips';
import TriggersTooltips from './components/data_display/Tooltip/TriggersTooltips';
import ControlledTooltips from './components/data_display/Tooltip/ControlledTooltips';
import VariableWidth from './components/data_display/Tooltip/VariableWidth';
import NonInteractiveTooltips from './components/data_display/Tooltip/NonInteractiveTooltips';
import DisabledTooltips from './components/data_display/Tooltip/DisabledTooltips';
import TransitionsTooltips from './components/data_display/Tooltip/TransitionsTooltips';
import FollowCursorTooltips from './components/data_display/Tooltip/FollowCursorTooltips';
import AnchorElTooltips from './components/data_display/Tooltip/AnchorElTooltips';
import DelayTooltips from './components/data_display/Tooltip/DelayTooltips';
import AccessibilityTooltips from './components/data_display/Tooltip/AccessibilityTooltips';
import Types from './components/data_display/Typography/TypographyTypes';
import TypographyTheme from './components/data_display/Typography/TypographyTheme';
import BasicAlerts from './components/Feedback/Alert/BasicAlerts';
import DescriptionAlerts from './components/Feedback/Alert/DescriptionAlerts';
import ActionAlerts from './components/Feedback/Alert/ActionAlerts';
import TransitionAlerts from './components/Feedback/Alert/TransitionAlerts';
import IconAlerts from './components/Feedback/Alert/IconAlerts';
import OutlinedAlerts from './components/Feedback/Alert/OutlinedAlerts';
import FilledAlerts from './components/Feedback/Alert/FilledAlerts';
import ColorAlerts from './components/Feedback/Alert/ColourAlerts';
import SimpleBackdrop from './components/Feedback/Backdrop/SimpleBackdrop';
import SimpleDialogDemo from './components/Feedback/Dialog/SimpleDialogDemo';
import AlertDialog from './components/Feedback/Dialog/AlertDialog';
import AlertDialogSlide from './components/Feedback/Dialog/AlertDialogSlide';
import FormDialog from './components/Feedback/Dialog/FormDialog';
import CustomizedDialogs from './components/Feedback/Dialog/CustomizedDialogs';
import FullScreenDialog from './components/Feedback/Dialog/FullScreenDialog';
import MaxWidthDialog from './components/Feedback/Dialog/MaxWidthDialog';
import ResponsiveDialog from './components/Feedback/Dialog/ResponsiveDialog';
import CircularIndeterminate from './components/Feedback/Progress/CircularIndeterminate';
import CircularIntegration from './components/Feedback/Progress/CircularIntegration';
import CircularWithValueLabel, { CircularProgressWithLabel } from './components/Feedback/Progress/CircularProgressWithLabel';
import LinearIndeterminate from './components/Feedback/Progress/LinearIndeterminate';
import LinearDeterminate from './components/Feedback/Progress/LinearDeterminate';
import LinearBuffer from './components/Feedback/Progress/LinearBuffer';
import LinearWithValueLabel from './components/Feedback/Progress/LinearWithValueLabel';
import CustomizedProgressBars from './components/Feedback/Progress/CustomizedProgressBars';
import CircularUnderLoad from './components/Feedback/Progress/CircularUnderLoad';
import { DelayingAppearance } from './components/Feedback/Progress/DelayingAppearance';
import Variants from './components/Feedback/Skelton/Variants';
import YouTube from './components/Feedback/Skelton/YouTube';
import Facebook from './components/Feedback/Skelton/Facebook';
import SkeletonTypography from './components/Feedback/Skelton/SkeletonTypography';
import SkeletonChildren from './components/Feedback/Skelton/SkeletonChildren';
import SkeletonColor from './components/Feedback/Skelton/SkeletonColor';
import CustomizedSnackbars from './components/Feedback/Snackbar/CustomizedSnackbars';
import SimpleSnackbar from './components/Feedback/Snackbar/SimpleSnackbar';
import PositionedSnackbar from './components/Feedback/Snackbar/PositionedSnackbar';
import LongTextSnackbar from './components/Feedback/Snackbar/LongTextSnackbar';
import ConsecutiveSnackbars from './components/Feedback/Snackbar/ConsecutiveSnackbars';
import FabIntegrationSnackbar from './components/Feedback/Snackbar/FabIntegrationSnackbar';
import TransitionsSnackbar from './components/Feedback/Snackbar/TransitionsSnackbar';
import IntegrationNotistack from './components/Feedback/Snackbar/IntegrationNotistack';
import BasicAccordion from './components/surfaces/Accordian/BasicAccordion';
import ControlledAccordions from './components/surfaces/Accordian/ControlledAccordians';
import CustomizedAccordions from './components/surfaces/Accordian/CustomizedAccordions';
import ButtonAppBar from './components/surfaces/App_Bar/ButtonAppBar';
import MenuAppBar from './components/surfaces/App_Bar/MenuAppBar';
import ResponsiveAppBar from './components/surfaces/App_Bar/ResponsiveAppBar';
import SearchAppBar from './components/surfaces/App_Bar/SearchAppBar';
import BasicCard from './components/surfaces/Card/BasicCard';
import OutlinedCard from './components/surfaces/Card/OutlinedCard';
import RecipeReviewCard from './components/surfaces/Card/RecipeReviewCard';
import SimpleBottomNavigation from './components/Navigation/BottomNavigation/SimpleBottomNavigation';
import BasicBreadcrumbs from './components/Navigation/Breadcrumbs/BasicBreadcrumbs';
import ActiveLastBreadcrumb from './components/Navigation/Breadcrumbs/ActiveLastBreadcrumb';
import Links from './components/Navigation/Link/Links';
import UnderlineLink from './components/Navigation/Link/UnderlineLink';
import ButtonLink from './components/Navigation/Link/ButtonLink';
import BasicMenu from './components/Navigation/Menu/BasicMenu';
import IconMenu from './components/Navigation/Menu/IconMenu';
import DenseMenu from './components/Navigation/Menu/DenseMenu';
import SimpleListMenu from './components/Navigation/Menu/SimpleListMenu';
import PositionedMenu from './components/Navigation/Menu/PositionedMenu';
import MenuListComposition from './components/Navigation/Menu/MenuListComposition';
import AccountMenu from './components/Navigation/Menu/AccountMenu';
import CustomizedMenus from './components/Navigation/Menu/CustomizedMenus';
import LongMenu from './components/Navigation/Menu/LongMenu';
import TypographyMenu from './components/Navigation/Menu/TypographyMenu';
import FadeMenu from './components/Navigation/Menu/FadeMenu';
import ContextMenu from './components/Navigation/Menu/ContextMenu';
import MenuPopupState from './components/Navigation/Menu/MenuPopupState';
import BasicPagination from './components/Navigation/Pagination/BasicPagination';
import PaginationOutlined from './components/Navigation/Pagination/PaginationOutlined';
import PaginationRounded from './components/Navigation/Pagination/PaginationRounded';
import PaginationSize from './components/Navigation/Pagination/PaginationSize';
import PaginationButtons from './components/Navigation/Pagination/PaginationButtons';
import PaginationRanges from './components/Navigation/Pagination/PaginationRanges';
import BasicSpeedDial from './components/Navigation/Speed_Dial/BasicSpeedDial';
import PlaygroundSpeedDial from './components/Navigation/Speed_Dial/PlaygroundSpeedDial';
import OpenIconSpeedDial from './components/Navigation/Speed_Dial/OpenIconSpeedDial';
import ControlledOpenSpeedDial from './components/Navigation/Speed_Dial/ControlledOpenSpeedDial';
import SpeedDialTooltipOpen from './components/Navigation/Speed_Dial/SpeedDialTooltipOpen';
import BoxSx from './components/Layout/Box/BoxSx';
import BoxComponent from './components/Layout/Box/BoxComponent';
import SimpleContainer from './components/Layout/Container/SimpleContainer';
import FixedContainer from './components/Layout/Container/FixedContainer';
import FullWidthGrid from './components/Layout/Grid/FullWidthGrid';
import BasicGrid from './components/Layout/Grid/BasicGrid';
import RowAndColumnSpacing from './components/Layout/Grid/RowAndColumnSpacing';
import ResponsiveGrid from './components/Layout/Grid/ResponsiveGrid';
import SpacingGrid from './components/Layout/Grid/SpacingGrid';
import { AutoGraphTwoTone } from '@mui/icons-material';
import AutoGrid from './components/Layout/Grid/AutoGrid';
import VariableWidthGrid from './components/Layout/Grid/VariableWidthGrid';
import ComplexGrid from './components/Layout/Grid/ComplexGrid';
import NestedGrid from './components/Layout/Grid/NestedGrid';
import ColumnsGrid from './components/Layout/Grid/ColumnsGrid';
import AutoGridNoWrap from './components/Layout/Grid/AutoGridNoWrap';
import CSSGrid from './components/Layout/Grid/CSSGrid';
import BasicStack from './components/Layout/Stack/BasicStack';
import DirectionStack from './components/Layout/Stack/DirectionStack';
import DividerStack from './components/Layout/Stack/DividerStack';
import ResponsiveStack from './components/Layout/Stack/ResponsiveStack';
import FlexboxGapStack from './components/Layout/Stack/FlexboxGapStack';
import ZeroWidthStack from './components/Layout/Stack/ZeroWidthStack';
import StandardImageList from './components/Layout/ImageList/StandardImageList';
import QuiltedImageList from './components/Layout/ImageList/QuiltedImageList';
import BasicModal from './components/Utils/Modal/BasicModal';
import NestedModal from './components/Utils/Modal/NestedModal';
import TransitionsModal from './components/Utils/Modal/TransitionsModal';
import BasicPopover from './components/Utils/Popover/BasicPopover';
import MouseOverPopover from './components/Utils/Popover/MouseOverPopover';
import VirtualElementPopover from './components/Utils/Popover/VirtualElementPopover';
import PopoverPopupState from './components/Utils/Popover/PopoverPopupState';
import TransitionsPopper from './components/Utils/Popper/TransitionsPopper';
import SpringPopper from './components/Utils/Popper/SpringPopper';
import PositionedPopper from './components/Utils/Popper/PositionedPopper';
import SimpleFade from './components/Utils/Transitions/SimpleFade';
import SimpleCollapse from './components/Utils/Transitions/SimpleCollapse';
import SimplePopper from './components/Utils/Popper/SimplePopper';
import SimplePaper from './components/surfaces/Paper/SimplePaper';

export default function App() {
  return (
    <>
      <BasicButtons />
      <ComboBox />
      <CountrySelect />
      <ControllableStates />
      <FreeSolo />
      <BasicButtons />
      <BasicButtonGroup />
      <SplitButton />
      <Checkboxes />
      <IndeterminateCheckbox />
      <CheckboxesGroup />
      <FormControlLabelPosition />
      <CustomizedCheckbox />
      <RadioButtonsGroup />
      <RowRadioButtonsGroup />
      <ControlledRadioButtonsGroup />
      <RadioButtons />
      <SizeRadioButtons />
      <FormControlLabelPlacement />
      <ErrorRadios />
      <CustomizedRadios />
      <FloatingActionButtonZoom />
      <BasicRating />
      <HoverRating />
      <CustomizedRating />
      <RadioGroupRating />
      <BasicSelect />
      <SelectVariants />
      <SelectLabels />
      <SelectAutoWidth />
      <ContinuousSlider />
      <DiscreteSlider />
      <DiscreteSliderSteps />
      <DiscreteSliderMarks />
      <DiscreteSliderValues />
      <DiscreteSliderLabel />
      <FloatingActionButtons />
      <RangeSlider />
      <MinimumDistanceSlider />
      <InputSlider />
      <BasicSwitches />
      <SwitchLabels />
      <ControlledSwitches />
      <SwitchesGroup />
      <CustomizedSwitches />
      <FormControlLabelPosition />
      <BasicTextFields />
      <FormPropsTextFields />
      <ValidationTextFields />
      <MultilineTextFields />
      <SelectTextFields />
      <InputWithIcon />
      <ToggleButtons />
      <ToggleButtonSizes />
      <ColorToggleButton />
      <VerticalToggleButtons />
      <StandaloneToggleButton />
      <CustomizedDividers />
      <ImageAvatars />
      <BackgroundLetterAvatars />
      <SimpleBadge />
      <BadgeVisibility />
      <BadgeOverlap />
      <BasicChips />
      <ChipsArray />
      <ListDividers />
      <InsetDividers />
      <SubheaderDividers />
      <MiddleDividers />
      <DividerText />
      <VerticalDividers />
      <VerticalDividerText />
      <SvgMaterialIcons />
      <BasicList />
      <NestedList />
      <FolderList />
      <BasicTable />
      <DataTable />
      <BasicTooltip />
      <PositionedTooltips />
      <CustomizedTooltips />
      <TriggersTooltips />
      <ControlledTooltips />
      <VariableWidth />
      <NonInteractiveTooltips />
      <DisabledTooltips />
      <TransitionsTooltips />
      <FollowCursorTooltips />
      <AnchorElTooltips />
      <DelayTooltips />
      <AccessibilityTooltips />
      <Types />
      <TypographyTheme />
      <BasicAlerts />
      <DescriptionAlerts />
      <ActionAlerts />
      <TransitionAlerts />
      <IconAlerts />
      <OutlinedAlerts />
      <FilledAlerts />
      <ColorAlerts />
      <SimpleBackdrop />
      <SimpleDialogDemo />
      <AlertDialog />
      <AlertDialogSlide />
      <FormDialog />
      <CustomizedDialogs />
      <FullScreenDialog />
      <MaxWidthDialog />
      <ResponsiveDialog />
      <CircularIndeterminate />
      <CircularIntegration />
      <CircularWithValueLabel />
      <LinearIndeterminate />
      <LinearDeterminate />
      <LinearBuffer />
      <LinearWithValueLabel />
      <CustomizedProgressBars />
      <DelayingAppearance />
      <CircularUnderLoad />
      <Variants />
      <YouTube />
      <Facebook />
      <SkeletonTypography />
      <SkeletonChildren />
      <SkeletonColor />
      <SimpleSnackbar />
      <CustomizedSnackbars />
      <PositionedSnackbar />
      <LongTextSnackbar />
      <ConsecutiveSnackbars />
      <FabIntegrationSnackbar />
      <TransitionsSnackbar />
      <IntegrationNotistack />
      <SimplePaper />
      <BasicAccordion />
      <ControlledAccordions />
      <CustomizedAccordions />
      <ButtonAppBar />
      <MenuAppBar />
      <ResponsiveAppBar />
      <SearchAppBar />
      <BasicCard />
      <OutlinedCard />
      <RecipeReviewCard />
      <SimpleBottomNavigation />
      <BasicBreadcrumbs />
      <ActiveLastBreadcrumb />
      <Links />
      <UnderlineLink />
      <ButtonLink />
      <BasicMenu />
      <IconMenu />
      <DenseMenu />
      <SimpleListMenu />
      <PositionedMenu />
      <MenuListComposition />
      <AccountMenu />
      <CustomizedMenus />
      <LongMenu />
      <TypographyMenu />
      <FadeMenu />
      <ContextMenu />
      <MenuPopupState />
      <BasicPagination />
      <PaginationOutlined />
      <PaginationRounded />
      <PaginationSize />
      <PaginationButtons />
      <PaginationRanges />
      <BasicSpeedDial />
      <PlaygroundSpeedDial />
      <ControlledOpenSpeedDial />
      <OpenIconSpeedDial />
      <SpeedDialTooltipOpen />
      <BoxSx />
      <BoxComponent />
      <SimpleContainer />
      <FixedContainer />
      <BasicGrid />
      <FullWidthGrid />
      <SpacingGrid />
      <RowAndColumnSpacing />
      <ResponsiveGrid />
      <AutoGrid />
      <VariableWidthGrid />
      <ComplexGrid />
      <NestedGrid />
      <ColumnsGrid />
      <AutoGridNoWrap />
      <CSSGrid />
      <BasicStack />
      <DirectionStack />
      <DividerStack />
      <ResponsiveStack />
      <FlexboxGapStack />
      <ZeroWidthStack />
      <StandardImageList />
      <QuiltedImageList />
      <BasicModal />
      <NestedModal />
      <TransitionsModal />
      <BasicPopover />
      <MouseOverPopover />
      <VirtualElementPopover />
      <PopoverPopupState />
      <TransitionsPopper />
      <SpringPopper />
      <PositionedPopper />
      <SimplePopper />
      <SimpleFade />
      <SimpleCollapse />
    </>
  );
}

