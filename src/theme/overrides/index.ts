//
import Card from "./Card";
import Paper from "./Paper";
import Input from "./Input";
import Table from "./Table";
import Button from "./Button";
import Tooltip from "./Tooltip";
import Backdrop from "./Backdrop";
import Typography from "./Typography";
import Autocomplete from "./Autocomplete";
import { DefaultTheme } from "@mui/private-theming";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: DefaultTheme) {
  return Object.assign(
    Card(theme),
    Table(theme),
    Input(theme),
    Paper(),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    Autocomplete(theme)
  );
}
