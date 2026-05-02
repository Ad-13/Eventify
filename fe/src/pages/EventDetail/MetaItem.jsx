const MetaItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-sm text-vd-muted">
    <span className="w-8 h-8 rounded-md bg-vd-accent/10 border border-[--vd-border]
                     flex items-center justify-center text-sm shrink-0">
      {icon}
    </span>
    {text}
  </div>
)

export default MetaItem
