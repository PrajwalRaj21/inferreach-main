'use client'

import { useEffect, useState } from 'react'

export default function LiveDashboard() {
  const [leads, setLeads] = useState(1247)
  const [clean, setClean] = useState(892)
  const [revenue, setRevenue] = useState(47)
  const [mounted, setMounted] = useState(false)

  const bars = [40, 65, 45, 80, 55, 90, 70]

  useEffect(() => {
    setMounted(true)

    // Live ticker for leads
    const ticker = setInterval(() => {
      setLeads((prev) => prev + Math.floor(Math.random() * 3) + 1)
    }, 2000)

    return () => clearInterval(ticker)
  }, [])

  return (
    <div className="live-dashboard">
      <div className="dashboard-header">
        <div className="dashboard-live">
          <span className="live-pulse" />
          <span>Sample Pipeline</span>
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
                style={{
                  height: mounted ? `${height}%` : '4px',
                  transitionDelay: `${i * 80}ms`,
                }}
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