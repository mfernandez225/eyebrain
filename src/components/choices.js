import React, { useState, useEffect } from "react";
import _ from "lodash";
import cx from "classnames";

const Choices = ({ choices, setChoice, value, allowCustom = true }) => {
  const [showCustom, setShowCustom] = useState(false);

  useEffect(() => {
    if (value && !_.find(choices, { value }) && !showCustom) {
      setShowCustom(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choices, value]);

  const toggleShowCustom = () => {
    if (showCustom) setChoice(0);
    setShowCustom((prev) => !prev);
  };

  return (
    <div className="row col-sm btn-group m-1">
      {choices.map((choice) => (
        <button
          key={choice.label}
          className={cx("btn m-1", {
            "btn-success": !showCustom && choice.value === value,
            "btn-secondary": showCustom || choice.value !== value,
            disabled: showCustom,
          })}
          onClick={(e) => setChoice(choice.value)}
          disabled={showCustom}
        >
          {choice.label}
        </button>
      ))}
      {allowCustom && (
        <button
          className={`btn btn-${showCustom ? "success" : "secondary"} m-1`}
          onClick={toggleShowCustom}
        >
          Custom
        </button>
      )}
      {allowCustom && showCustom && (
        <input
          className="form-control"
          type="number"
          placeholder="Custom"
          name="custom"
          max={100}
          min={0}
          value={Math.round(value * 100)}
          onChange={(e) => setChoice(e.target.value / 100)}
        />
      )}
    </div>
  );
};

export default Choices;
