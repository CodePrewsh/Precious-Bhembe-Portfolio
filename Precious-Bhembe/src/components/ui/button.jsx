import * as React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-slate-900 text-slate-50 shadow hover:bg-slate-900/90",
    outline: "border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900",
  }
  
  const sizes = {
    default: "h-9 px-4 py-2",
    icon: "h-9 w-9",
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
