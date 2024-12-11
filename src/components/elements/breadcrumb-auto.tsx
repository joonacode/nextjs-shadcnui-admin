"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadcrumb } from "@/hooks/use-breadcrumb";
import { Fragment } from "react";

export const BreadcrumbAuto = () => {
  const breadcrumb = useBreadcrumb();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumb.map((item, i) => (
          <Fragment key={i}>
            <BreadcrumbItem >
              {i === breadcrumb.length - 1 ? (
                <BreadcrumbPage className="capitalize">
                  {item.title}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink className="capitalize" href={item.path}>
                  {item.title}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {i === breadcrumb.length - 1 ? null : <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
