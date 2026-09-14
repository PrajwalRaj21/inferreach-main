'use client'

import { useEffect, useState } from 'react'

export default function LiveDashboard() {
  const [leads, setLeads] = useState(0)
  const [clean, setClean] = useState(0)
  const [revenue, setRevenue] = useState(0)
  const [bars, setBars] = useState([0, 0, 0, 0, 0, 0, 0])

  const targetLeads = 1247
  const targetClean = 892
  const targetRevenue = 47
  const targetBars = [40, 65, 45, 80, 55, 90, 70]

  useEffect(() => {
    // Count up animation
    const duration = 1800
    const start = performance.now()

    const animate = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setLeads(Math.floor(targetLeads * eased))
      setClean(Math.floor(targetClean * eased))
      setRevenue(Math.floor(targetRevenue * eased))
      setBars(targetBars.map((v) => v * eased))
      if (t < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)

    // Live ticker after animation
    const interval = setInterval(() => {
      setLeads((prev) => prev + Math.floor(Math.random() * 3) + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="live-dashboard">
      <div className="dashboard-header">
        <div className="dashboard-live">
          <span className="live-pulse" />
          <span>Live Pipeline</span>
        </div>
        <span className="dashboard-growth">+24.7%</span>
      </div>

      <div className="dashboard-metrics">
        <div className="dash-metric">
          <div className="dash-label">Qualified Leads</div>
          <div className="dash-value">{leads.toLocaleString()}</div>
          <div className="dash-trend">↑ 18%</div>
        </div>
        <div className="dash-metric">
          <div className="dash-label">Enriched Records</div>
          <div className="dash-value">{clean.toLocaleString()}</div>
          <div className="dash-trend">↑ 22%</div>
        </div>
      </div>

      <div className="dashboard-chart">
        <div className="chart-bars">
          {bars.map((height, i) => (
            <div key={i} className="bar-wrap">
              <div
                className="bar"
                style={{ height: `${height}%`, animationDelay: `${i * 60}ms` }}
              />
            </div>
          ))}
        </div>
        <div className="chart-labels">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>

      <div className="dashboard-footer">
        <div className="dash-footer-item">
          <span className="dot-amber" /> CRM synced
        </div>
        <div className="dash-footer-item">
          <span className="dot-blue" /> ${revenue}k closed
        </div>
      </div>
    </div>
  )
}