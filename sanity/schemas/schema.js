import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import person from "./person";

export default createSchema({
	name: "default",
	types: schemaTypes.concat([person]),
});
