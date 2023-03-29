import { DecimalPipe } from '@angular/common';
import { Injectable } from '@angular/core';

export interface Employee {
  id_product: Number,
  name_product: String,
  description: String,
  unit_price: Number,
  stock: Number
}