/**
 * Design system color palette based on primary (#b35227) and secondary (#e9d0ba) colors.
 * Colors are organized into semantic categories with variations and gradients.
 */

export const Colors = {
  primary: {
    base: "#b35227",
    light: "#c97349", // 20% lighter
    lighter: "#df9470", // 40% lighter
    dark: "#8f4220", // 20% darker
    darker: "#6b3118", // 40% darker
  },
  secondary: {
    base: "#e9d0ba",
    light: "#f0dfd0", // 20% lighter
    lighter: "#f7ede5", // 40% lighter
    dark: "#d1b49e", // 20% darker
    darker: "#b99882", // 40% darker
  },
  gradients: {
    primary: ["#b35227", "#c97349", "#df9470"],
    secondary: ["#e9d0ba", "#f0dfd0", "#f7ede5"],
    mix: ["#b35227", "#d1b49e", "#e9d0ba"],
  },
  text: {
    primary: "#2D1810", // Dark brown for primary text
    secondary: "#5C392B", // Medium brown for secondary text
    tertiary: "#8B5E4D", // Light brown for tertiary text
    onPrimary: "#FFFFFF", // White text on primary color
    onSecondary: "#2D1810", // Dark text on secondary color
  },
  background: {
    light: "#FDF8F5", // Very light warm beige
    medium: "#F7EDE5", // Light warm beige
    dark: "#2D1810", // Dark brown
  },
  status: {
    success: "#4A7B59", // Earthy green
    error: "#A13D2D", // Rusty red
    warning: "#C68D4C", // Warm orange
    info: "#6B7B8A", // Cool gray
  }
};
