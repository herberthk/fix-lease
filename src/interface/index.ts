import React from "react";

export interface ProgressProps {
  text: string;
  value: number;
  rating: string;
  id?: number;
}

type Text = "Excellent" | "Average" | "Poor";

export interface RatingType {
  value: string;
  text: Text;
  review?: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface IState {
  value: number;
}

export interface ImgProps {
  img: string;
  rows?: number;
  cols?: number;
  title: string;
  id: number;
}
