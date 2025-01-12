/**
 * @license
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import {Tensor} from '../../tensor';
import {BackendValues, DataType} from '../../types';
import {DataStorage} from '../backend';

export interface TensorData<D extends DataType> {
  values?: BackendValues;
  dtype: D;
  // For complex numbers, the real and imaginary parts are stored as their own
  // individual tensors, with a parent joining the two with the
  // complexTensors field.
  // TODO(smilkov): Replace Tensor with TensorInfo when you modularize ops
  // that work with complex tensors.
  complexTensors?: {real: Tensor, imag: Tensor};
}

export interface CPUStorage {
  data: DataStorage<TensorData<DataType>>;
}
