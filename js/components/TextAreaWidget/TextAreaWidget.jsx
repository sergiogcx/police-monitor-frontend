import React from 'react';

export default function TextAreaWidget(props) {

  return (
    <textarea
      id={props.id}
      name={props.id}
      disabled={props.disabled}
      maxLength={props.schema.maxLength}
      autoComplete={props.options.autocomplete || false}
      className={props.options.widgetClassNames}
      value={typeof props.value === 'undefined' ? '' : props.value}
      onBlur={() => props.onBlur(props.id)}
      onChange={(event) => props.onChange(event.target.value ? event.target.value : undefined)}
    >{props.initialText}</textarea>
  );
}

TextAreaWidget.defaultProps = {
  type: 'textarea'
};
