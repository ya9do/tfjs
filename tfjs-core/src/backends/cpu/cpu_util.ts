/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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

import {DataId, TensorInfo} from '../../kernel_registry';
import {BackendValues, DataType} from '../../types';
import {assert} from '../../util';
import {DataStorage} from '../backend';
import {TensorData} from './cpu_types';

export function assertNotComplex(
    tensor: TensorInfo|TensorInfo[], opName: string): void {
  if (!Array.isArray(tensor)) {
    tensor = [tensor];
  }
  tensor.forEach(t => {
    if (t != null) {
      assert(
          t.dtype !== 'complex64',
          () => `${opName} does not support complex64 tensors.`);
    }
  });
}

/**
 * Helper method that stores the values in the storage and returns the
 * associated data id.
 */
export function storeData(
    data: DataStorage<TensorData<DataType>>, dtype: DataType,
    values: BackendValues): DataId {
  const dataId = {};
  data.set(dataId, {dtype, values});
  return dataId;
}
