import {
  FormControl,
  FormHelperText,
  // InputBaseComponentProps,
  Stack,
} from "@mui/material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { isEmpty } from "lodash-es";
import React, { useState, ElementType } from "react";
import { FormConfig } from "../../store";
import CloseIcon from "@mui/icons-material/Close";
import { MaskField } from "react-mask-field";

const colorOptions = [
  "primary",
  "secondary",
  "error",
  "info",
  "success",
  "warning",
];

// type CustomMaskFieldProps = ElementType<InputBaseComponentProps> & {
//   mask: "date" | "datetime" | "time" | "fulltime" | "phone" | "card";
// };

// const CustomMaskField = (props) => {
//   return <></>;
// };

type TextInputProps = FormConfig;
export const TextInput = (props: TextInputProps) => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState((props.options.value ?? "").length);

  const EndAdornment = (
    <InputAdornment position="end">
      <IconButton onClick={() => setValue("")} edge="end" size="small">
        <CloseIcon />
      </IconButton>
    </InputAdornment>
  );

  return (
    <FormControl>
      <TextField
        variant={
          props.options.filled
            ? "filled"
            : props.options.outlined
            ? "outlined"
            : "standard"
        }
        label={props.options.label}
        value={value}
        multiline={props.options.autogrow ?? false}
        color={
          colorOptions.includes(props.options.color)
            ? props.options.color
            : "primary"
        }
        size={props.options.dense ? "small" : "medium"}
        onChange={(e) => {
          setValue(e.target.value);
          setCount(count + 1);
        }}
        InputProps={{
          // inputComponent: (_props) => (
          //   <CustomMaskField mask={props.options.mask} {..._props} />
          // ),
          startAdornment: props.options.prefix,
          endAdornment: (
            <Stack direction="row" gap={2} alignItems="center">
              {props.options.suffix}
              {props.options.clearable && !isEmpty(value) && EndAdornment}
            </Stack>
          ),
        }}
      />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pt: 0.5 }}
      >
        {props.options.hint && (
          <FormHelperText>{props.options.hint}</FormHelperText>
        )}
        {props.options.counter && <FormHelperText>{count}</FormHelperText>}
      </Stack>
    </FormControl>
  );
};
