// Proto Elements
import ProtoButton from './proto/ProtoButton';
import ProtoAnchor from './proto/ProtoAnchor';
import ProtoInput from './proto/ProtoInput';
import ProtoTextarea from './proto/ProtoTextarea';

// Buttons
import Button from './component/Button';
import CheckboxButton from './component/CheckboxButton';

// Anchor
import Anchor from './component/Anchor';

// Input
import Form from './component/Form';
import FormSubmit from './component/FormSubmit';
import FormInput from './component/FormInput';

import Label from './component/Label';
import InnerLabel from './component/InnerLabel';
import InputCaption from './component/InputCaption';
import Input from './component/Input';
import Textarea from './component/Textarea';
import { RequiredInput } from './hoc/ValidatedInputs';

// HOC
import advancedInput from './hoc/advancedInput';
import formInput from './hoc/formInput';
import formSubmit from './hoc/formSubmit';

const FormRequiredInput = formInput(RequiredInput);

// Dropdowns
import DropdownItem from './component/DropdownItem';
import DropdownDivider from './component/DropdownDivider';
import InnerLabelDropdown from './component/InnerLabelDropdown';

// Layout
import Container from './component/Container';
import Col from './component/Col';
import Row from './component/Row';
import RowCol from './component/RowCol';

// Type
import H1 from './component/H1';
import H2 from './component/H2';
import H3 from './component/H3';
import H4 from './component/H4';
import P from './component/P';
import Code from './component/Code';
import Warning from './component/Warning';

// Icons
import Chevron from './icon/Chevron';



export {
  ProtoButton,
  ProtoAnchor,
  ProtoInput,
  ProtoTextarea,

  Button,
  CheckboxButton,
  Anchor,
  InputCaption,

  Form,
  FormSubmit,
  FormInput,
  Label,
  Input,
  InnerLabel,
  Textarea,

  advancedInput,
  RequiredInput,
  FormRequiredInput,

  DropdownItem,
  DropdownDivider,
  InnerLabelDropdown,

  Container,
  Col,
  Row,
  RowCol,

  H1,
  H2,
  H3,
  H4,
  P,
  Code,
  Warning,

  Chevron,
};
