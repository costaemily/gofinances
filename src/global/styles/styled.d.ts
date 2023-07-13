import "styled-components";
import { AppTheme } from "./theme";

declare module "styled-components" {
  type ThemeType = typeof AppTheme;
  export interface DefaultTheme extends ThemeType {}
}
