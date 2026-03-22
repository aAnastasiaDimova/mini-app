import styled from "@emotion/styled";

export const AccountContainer = styled.div<{ isEditing: boolean }>`
  background: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
  padding-bottom: 80px;
`;

export const AccountCard = styled.div`
  padding: 16px;
  padding-bottom: 76px;
  background: var(--card-bg-color);
  border-radius: 16px;
  color: var(--text-color);
`;

export const AccountHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AccountHeaderActions = styled.div`
  position: absolute;
  top: 8px;
  right: 12px;
  display: flex;
  gap: 8px;
  z-index: 5;
`;

export const AccountAction = styled.button`
  width: 48px;
  height: 48px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  display: grid;
  place-items: center;
  cursor: pointer;
  background: ${p => p.theme === "dark" ? "#3a3a3a" : "#c3f8ff1a"};
  color: ${p => p.theme === "dark" ? "#93c5fd" : "#111827"};

  &.save {
    background: #007aff;
    color: white;
  }

  &.cancel {
    background: ${p => p.theme === "dark" ? "#444" : "#4378ff1a"};
    color: #007aff;
  }
`;

export const AccountAvatarWrapper = styled.div`
  display: grid;
  place-items: center;
`;

export const AccountAvatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  /* обводка убрана полностью */
`;

export const AccountChangePhoto = styled.button`
  margin: 8px 0 10px;
  font-size: 15px;
  color: #60a5fa;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const AccountName = styled.div`
  text-align: center;
`;

export const AccountFullname = styled.div`
  font-weight: 500;
  font-size: 17px;
  line-height: 153%;
  color: var(--text-color);
`;

export const AccountMeta = styled.div`
  color: var(--description-color);
  font-size: 16px;
  line-height: 150%;
`;

export const Field = styled.div`
  position: relative;
  margin-top: 12px;
`;

export const FieldLabel = styled.label<{
  isEditing?: boolean;
  isFocused?: boolean;
}>`
  position: absolute;
  left: 12px;
  top: 0;
  transform: translateY(-50%);
  background: var(--card-bg-color);
  padding: 0 6px;
  color: ${p => p.isFocused ? "#60a5fa" : "#78797E"};
  font-size: 15px;
  line-height: 1;
  pointer-events: none;
  transition: color 0.2s ease;
`;

export const Input = styled.input<{ isEditing?: boolean }>`
  width: 100%;
  padding: 16px;
  border: 2px solid #78797E;
  border-radius: 10px;
  background: var(--card-bg-color);
  color: var(--text-color);
  font-size: 16px;
  line-height: 150%;
  box-sizing: border-box;

  &:focus {
    border-color: #60a5fa;
    outline: none;
  }

  &[disabled],
  &[readonly] {
    background: var(--card-bg-color) !important;
    color: var(--text-color) !important;
    cursor: default;
  }

  &[type="number"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2378797E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px;
    padding-right: 40px;
  }
`;

export const TextareaWrapper = styled.div<{ isEditing?: boolean }>`
  padding: 16px;
  border: 2px solid #78797E;
  border-radius: 10px;
  background: var(--card-bg-color);
  overflow-y: auto;
  margin-bottom: 20px;

  &:focus-within {
    border-color: #60a5fa;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 135px;
  border: none;
  outline: none;
  resize: none;
  background: transparent;
  font-size: 16px;
  line-height: 150%;
  color: var(--text-color);
`;

export const WebsiteField = styled.div`
  margin-top: 30px;
  position: relative;
`;

export const WebsiteInput = styled.input<{
  isEditing?: boolean;
  readOnly?: boolean;
}>`
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 10px;
  background: ${p => p.theme === "dark" ? "rgba(30, 58, 138, 0.25)" : "rgba(67, 120, 255, 0.05)"};
  color: ${p => p.theme === "dark" ? "#93c5fd" : "#1f6feb"};
  font-size: 16px;
  line-height: 150%;
  cursor: ${p => p.readOnly ? "pointer" : "text"};

  ${p => p.isEditing && `
    border: 2px solid #78797E;
    background: var(--card-bg-color);
    color: var(--text-color);

    &:focus {
      border-color: #60a5fa;
    }
  `}
`;

export const CopyButton = styled.button<{ copied?: boolean }>`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  color: ${p => p.theme === "dark" ? "#93c5fd" : "#1f6feb"};
`;

export const EditCheckboxList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 0;
`;

export const EditCheckboxItem = styled.label<{ checked: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.15s;

  background: ${p => p.checked ? "rgba(96, 165, 250, 0.12)" : "transparent"};
  border: 1.5px solid ${p => p.checked ? "#60a5fa" : "#78797E"};
  color: ${p => p.checked ? "#60a5fa" : "var(--text-color)"};

  input {
    accent-color: #60a5fa;
  }

  &:hover {
    background: ${p => p.checked ? "rgba(96, 165, 250, 0.2)" : "rgba(120, 121, 126, 0.08)"};
  }
`;

export const AccountTagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
`;

export const AccountTag = styled.span`
  padding: 6px 12px;
  background: transparent;
  border: 1.5px solid #78797E;
  border-radius: 8px;
  font-size: 15px;
  color: var(--text-color);
`;

export const TagsBox = styled.div`
  border: 2px solid #78797E;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-height: 54px;
  background: var(--card-bg-color);

  &:focus-within {
    border-color: #60a5fa;
  }
`;

export const TechTag = styled.span`
  padding: 6px 12px;
  background: transparent;
  border: 1.5px solid #78797E;
  border-radius: 8px;
  font-size: 15px;
  color: var(--text-color);
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export const RemoveTag = styled.button`
  background: none;
  border: none;
  color: #78797E;
  font-size: 18px;
  cursor: pointer;
  padding: 0 2px;
  line-height: 1;

  &:hover {
    color: #ff6b6b;
  }
`;

export const TechInput = styled.input`
  width: 100%;
  border: 2px solid #78797E;
  border-radius: 10px;
  font-size: 15px;
  background: var(--card-bg-color);
  color: var(--text-color);
  padding: 14px 16px;
  margin-top: 16px;

  &:focus {
    border-color: #60a5fa;
    outline: none;
  }

  &::placeholder {
    color: #78797E;
  }
`;

export const AddButton = styled.button`
  padding: 12px 28px;
  background: ${p => p.theme === "dark" ? "rgba(96, 165, 250, 0.15)" : "#4378ff1a"};
  color: #60a5fa;
  border: none;
  border-radius: 14px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const DirectionEditContainer = styled.div<{ isEditing?: boolean }>`
  border: 2px solid #78797E;
  border-radius: 10px;
  background: var(--card-bg-color);
  padding: 12px 14px;
  margin-top: 30px;
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: #60a5fa;
  }
`;

export const Select = styled.select<{ isEditing?: boolean }>`
  width: 100%;
  padding: 16px;
  border: 2px solid #78797E;
  border-radius: 10px;
  font-size: 16px;
  line-height: 150%;
  background: var(--card-bg-color);
  color: var(--text-color);

  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2378797E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;
  padding-right: 40px;

  &:focus {
    border-color: #60a5fa;
    outline: none;
  }
`;