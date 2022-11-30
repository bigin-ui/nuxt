import type { ComposerTranslation } from "@nuxtjs/i18n/dist/runtime/composables";
import type { ErrorObject, Validation } from "@vuelidate/core";
import { get } from "lodash-unified";
import type { Ref } from "vue";

const getDefaultMessage = (
  v: Validation,
  $property: string,
  $propertyPath: string
) => {
  return get(v, `${$propertyPath || $property}.$errors[0].$message`);
};

const messageDecorator = (
  t: ComposerTranslation,
  $validator: string,
  $property: string,
  ...rest: any[]
) =>
  t(`vuelidate.messages.${$validator}`, [
    t(`vuelidate.fields.${$property}`),
    ...rest,
  ]);

const getI18nMessage = (
  v: Validation,
  t: ComposerTranslation,
  $property: string,
  $propertyPath: string
) => {
  const errorObject: ErrorObject | undefined = get(
    v,
    `${$propertyPath || $property}.$errors[0]`
  );

  if (errorObject) {
    const { $validator, $params }: { $validator: string; $params: any } =
      errorObject;

    switch ($validator) {
      case "between":
        return messageDecorator(
          t,
          $validator,
          $property,
          $params.min,
          $params.max
        );

      case "minLength":
        return messageDecorator(t, $validator, $property, $params.min);

      case "minValue":
        return messageDecorator(t, $validator, $property, $params.min);

      case "maxLength":
        return messageDecorator(t, $validator, $property, $params.max);

      case "maxValue":
        return messageDecorator(t, $validator, $property, $params.max);

      case "sameAs":
        return messageDecorator(
          t,
          $validator,
          $property,
          t(`vuelidate.fields.${$params.equalTo}`)
        );

      case "greaterThan":
        return messageDecorator(
          t,
          $validator,
          $property,
          t(`vuelidate.fields.${$params.greaterThan.gt}`)
        );

      case "lessThan":
        return messageDecorator(
          t,
          $validator,
          $property,
          t(`vuelidate.fields.${$params.lessThan.lt}`)
        );

      case "dateGreaterThan":
        return messageDecorator(
          t,
          $validator,
          $property,
          t(`vuelidate.fields.${$params.dateGreaterThan.gt}`)
        );

      case "dateGreaterThanOrEqual":
        return messageDecorator(
          t,
          $validator,
          $property,
          t(`vuelidate.fields.${$params.dateGreaterThanOrEqual.gte}`)
        );

      case "timeGreaterThanIf":
        return messageDecorator(
          t,
          $validator,
          $property,
          t(`vuelidate.fields.${$params.timeGreaterThanIf.gti}`)
        );

      case "dateLessThan":
        return messageDecorator(
          t,
          $validator,
          $property,
          t(`vuelidate.fields.${$params.dateLessThan.lt}`)
        );

      default:
        return messageDecorator(t, $validator, $property);
    }
  }

  return "";
};

export function useValidationMessage(
  v: Ref<Validation>,
  t: ComposerTranslation | undefined = undefined
) {
  const value = unref(v);

  return {
    validationMessage: ($property: string, $propertyPath: string = "") =>
      t
        ? getI18nMessage(value, t, $property, $propertyPath)
        : getDefaultMessage(value, $property, $propertyPath),
  };
}
