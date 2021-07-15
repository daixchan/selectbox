import React, {useState, useRef} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useClickOutside from "./useClickOutside";

const SelectBox = ({options, initValue = 0}) => {
  const [label, setLabel] = useState(options[initValue].label)
  const [isActivated, setIsActivated] = useState(false)
  const ref = useRef()
  useClickOutside(ref, () => setIsActivated(false))
  const optionWrapperVariants = {
    spread: {
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 800,
        damping: 16
      },
      display: "initial"
    },
    fold: {
      opacity: 0,
      rotateX: -30,
      transition: {
        duration: 0.2
      },
      transitionEnd: {
        display: "none"
      }
    }
  };
  return (
    <SelectWrapper ref={ref} onClick={() => setIsActivated(!isActivated)}>
      <Select>
        <Text>{label}</Text>
        <Arrow />
      </Select>
      <OptionWrapper initial="fold" animate={isActivated ? "spread" : "fold"} variants={optionWrapperVariants}>
        {options.map((option) => (
        <Option key={option.value} onClick={() => setLabel(option.label)} className={option.label === label ? "active" : ""}>
          <Text>{option.label}</Text>
        </Option>
        ))}
      </OptionWrapper>
    </SelectWrapper>
  );
}
export default SelectBox

const styles = {
  width: "158px",
  colors: {
    border: "#dddddd",
    select: {
      background: {
        default: "#ffffff",
        hover: "#f5f5f5",
      },
      text: {
        default: "#323232",
        hover: "#252525",
      }
    },
    option: {
      background: {
        default: "#ffffff",
        hover: "#f5f5f5",
        active: "#e6f7ff",
      },
      text: {
        default: "#323232",
        hover: "#252525",
        active: "#000000",
      }
    },
    arrow: {
      default: "#bfbfbf",
      hover: "#252525",
    }
  },
  transition: {
    type: "spring",
    stiffness: 500,
    damping: 30
  }
}

const SelectWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${styles.width};
  perspective: 1000px;
  cursor: pointer;
`

const Select = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  padding: 8px;
  transition: color 200ms;
  border: 1px solid ${styles.colors.border};
  border-radius: 2px;

  ${SelectWrapper}:hover & {
    color: ${styles.colors.select.text.hover};
  }
`

const Arrow = styled.div`
  position: absolute;
  left: auto;
  right: 8px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 8px;
    height: 1px;
    border-radius: 3px;
    background: ${styles.colors.arrow.default};
  }

  &:before {
    transform: translateX(-100%) translateX(3px) rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`

const OptionWrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  left: 0;
  min-width: 100%;

  background: #ffffff;
  border-radius: 2px;
  overflow: hidden;
  backface-visibility: hidden;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  transform-origin: 50% -30px;
`

const Option = styled.div`
  padding: 8px;
  white-space: nowrap;
  animation-fill-mode: forwards;

  transition: background 300ms, color 300ms;
  color: ${styles.colors.option.text.default};
  &:hover {
    background: ${styles.colors.option.background.hover};
    color: ${styles.colors.option.text.hover};
  }
  &.active {
    background: ${styles.colors.option.background.active};
    color: ${styles.colors.option.text.active};
  }
`

const Text = styled.div`
  font-size: 12px;
  flex: 1 0 auto;
  font-family: 나눔고딕, open sans, sans-serif;
  text-transform: uppercase;
`